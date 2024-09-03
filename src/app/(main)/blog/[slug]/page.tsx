import type { Metadata, ResolvingMetadata } from "next";
import Hero from "./hero";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/util/prismaClient";
import { blog } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { BASE_URL } from "@/util/constants";
import CopyBtn from "./copyBtn";
import { MDXRemote } from "next-mdx-remote/rsc";
import YoutubeEmbed from "@/components/yotube-embed";
import { FooterAD, SquareAD } from "@/util/ads";

export const dynamicParams = true;

type PageProps = {
  params: {
    slug: string;
  };
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateStaticParams() {
  const blogs: Pick<blog, "slug">[] = await prisma.blog.findMany({
    select: {
      slug: true,
    },
  });

  return blogs.map(({ slug }) => ({
    slug,
  }));
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  let item = null;

  // fetch data
  try {
    item = await prisma.blog.findUnique({
      where: {
        slug: params.slug,
      },
      select: {
        title: true,
        description: true,
        author: true,
        focusKeyword: true,
        createdAt: true,
        heroImage: {
          select: {
            url: true,
          },
        },
      },
    });

    if (!item) throw { error: "Not Found" };
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError)
      item = {
        title: "Not Found",
      };
  }

  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || [];

  return {
    title: item?.title,
    description: item?.description,
    openGraph: {
      publishedTime: item?.createdAt?.toISOString(),
      type: "article",
      title: item?.title,
      description: item?.description,
      images: {
        url: item?.heroImage?.url ?? "",
      },
    },
    keywords: item?.focusKeyword,
  };
}

const getBlog = async (slug: string) => {
  const item = await prisma.blog.findFirst({
    where: {
      slug: slug,
    },
    select: {
      title: true,
      description: true,
      body: true,
      heroImage: {
        select: {
          url: true,
          alt: true,
        },
      },
      tags: true,
      focusKeyword: true,
      relatedBlogs: true,
      createdAt: true,
    },
  });
  return item;
};

const getRecents = async () => {
  const item = await prisma.blog.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
    select: {
      title: true,
      heroImage: {
        select: {
          url: true,
          alt: true,
        },
      },
      createdAt: true,
      slug: true,
    },
  });
  return item;
};

export default async function Home({ params: { slug } }: PageProps) {
  const item = await getBlog(slug);

  const recents = await getRecents();

  if (!item) return notFound();

  if (item instanceof PrismaClientKnownRequestError) return notFound();

  if (!item.title) return notFound();

  return (
    <main className="bg-background bg-bg min-h-svh transition-all">
      <Hero
        title={item.title ?? ""}
        desc={item.description ?? ""}
        heroImage={{
          url:
            item.heroImage?.url ??
            "https://images.ctfassets.net/f7l5sefbt57k/5qtjdCxnDwJ1drPVMkwBpf/410b1e7193b8f488d0d3fe2e5b65a0ce/Default_A_pair_of_hands_their_fingers_dancing_skillfully_acro_1.jpg",
          description:
            item.heroImage?.alt ??
            "Create an image featuring JavaScript code snippets and interview-related icons or graphics. Use a color scheme of yellows and blues. Include the title '7 Essential JavaScript Interview Questions for Freshers'.",
        }}
        slug={slug}
        createdAt={item.createdAt}
        tag={item.tags[0] ?? item.focusKeyword[0]}
      />

      <section className="flex max-md:flex-col gap-2">
        <SquareAD />
        <div className="max-w-lg md:max-w-3xl m-auto px-8 lg:px-5 body">
          <MDXRemote source={item.body ?? ""} components={{ YoutubeEmbed }} />
        </div>
        <SquareAD />
      </section>

      <div className="py-10 m-auto px-8 lg:px-5 grid gap-4 max-w-lg md:max-w-3xl">
        <span className="text-2xl max-md:text-xl font-bold break-words">
          Share Article
        </span>
        <section className="md:py-2 flex gap-5">
          <Link
            target="_blank"
            href={`https://api.whatsapp.com/send?text=${item.title} - 30DC Blog https://30dayscoding.com/blog/${slug}`}
            title={"Share via Whatsapp"}
          >
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </Link>

          <Link
            href={`mailto:?subject=Do check our latest blog on '${item.title}'&body=Check out new blog on ${item.title} via visiting - https://30dayscoding/blog/${slug}.`}
            title={"Share via Mail"}
          >
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
            </svg>
          </Link>

          <CopyBtn slug={slug} />

          <Link
            href={`https://twitter.com/intent/tweet?text=Read the blog from 30dayscoding on ${item.title} - ${BASE_URL}/blog/${slug}`}
            title={"Share via X"}
            target="_blank"
          >
            <svg
              className="h-6 w-6 fill-white/50 transition-all duration-200 lg:hover:fill-prime"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
            </svg>
          </Link>
        </section>
        <hr className="border-gray-500 my-3" />
        <FooterAD />
        <span className="text-2xl max-md:text-xl font-bold break-words">
          Latest Blogs
        </span>
        <div className="flex flex-col gap-3">
          {recents.map(({ title, slug, heroImage, createdAt }, i) => {
            const date = new Date(createdAt).toLocaleDateString("en-US", {
              // weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            return (
              <Link
                key={i}
                href={`/blog/${slug}`}
                className="flex items-center gap-3 hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative overflow-hidden bg-second rounded-md w-32 h-20 shrink-0 shadow-xl">
                  <Image
                    src={heroImage?.url || ""}
                    alt={heroImage?.alt || ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-xs text-prime uppercase text-muted-foreground font-bold">
                    Javascript
                  </span>
                  <span className="line-clamp-2">{title}</span>
                  <span className="text-xs uppercase text-muted-foreground font-bold">
                    {date}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
