// "use client";
import Image from "next/image";
import Button from "@/components/Button";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  // fetch data
  const { title, description, thumbnail } = await fetch(
    `https://dummyjson.com/products/${id}`
  ).then((res) => res.json());

  return {
    title,
    description,
    openGraph: {
      images: [thumbnail],
    },
  };
}

async function getSingleProduct(id: string) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {
  params: {
    id: string;
  };
}

const ProductPage = async ({ params }: IProps) => {
  const { id, title, thumbnail } = await getSingleProduct(params.id);

  return (
    <div className="m-3">
      <h2> ID - {params.id}</h2>
      <h2>{title}</h2>
      <Image src={thumbnail} alt={title} width={500} height={500} />
      <Button text="Add to cart" />
    </div>
  );
};

export default ProductPage;
