import { Metadata } from "next";
import { getProductBySlug } from "@/data/products";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const product = getProductBySlug(params.slug);

  if (!product) {
    return {
      title: "Product Not Found",
    };
  }

  return {
    title: product.seoTitle || `${product.name} | Travancore Medical System`,
    description: product.seoDescription || product.fullDescription,
    keywords: product.metaKeywords || [product.name, product.category],
    openGraph: {
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.fullDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seoTitle || product.name,
      description: product.seoDescription || product.fullDescription,
      images: [product.image],
    },
    alternates: {
      canonical: `https://travancoremedical.com/products/${product.slug}`,
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

