"use server";

import { auth } from "@/auth";
import prisma from "@/util/prismaClient";

export async function getAllGuides() {

    const query = `query { guideCollection{ items{ guideId, title, description, pricing { amount, bigAmount, percentage, currency, } }}}`;

    const data = await (
        await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                },
                body: JSON.stringify({ query }),
            }
        )
    ).json();

    const {
        data: {
            guideCollection: { items },
        },
    } = data;

  return items;
}

export default async function getGuides() {
  const session = await auth();

  if (!session?.user?.email) return [];

  const payments = await prisma.payments.findMany({
    where: {
      email: session.user.email,
      paymentStatus: "completed",
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      guides: true,
    },
  });

  const guideIds = Array.from(new Set(payments.flatMap((item) => item.guides)));

  if (guideIds?.length <= 0) return []

    const json = JSON.stringify(
        guideIds.map((e: string) => ({ guideId: e }))
    ).replace(/"([^"]+)":/g, "$1:");

    const query = `query { guideCollection(where: {OR: ${json}}){ items{ title, source }}}`;

    const data = await (
        await fetch(
            `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
                },
                body: JSON.stringify({ query }),
            }
        )
    ).json();

    const {
        data: {
            guideCollection: { items },
        },
    } = data;

  return items;
}
