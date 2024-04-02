import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My e-commerce | Products page",
  description: "",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Layout UI */}
      {children}
    </div>
  );
}
