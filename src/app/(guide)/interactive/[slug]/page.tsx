import { Metadata } from "next";
import Main from "../main";
import React from 'react';

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `${params.slug.charAt(0).toUpperCase() + params.slug.slice(1)} Interactive Learning | 30 Days Coding`,
    description: `Master ${params.slug} through interactive lessons and hands-on exercises`,
  };
}

export default function Page({ params: { slug } }: Props) {
  return <Main />;
} 