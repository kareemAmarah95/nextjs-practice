import { Suspense } from "react";
import ProductList from "../../../components/ProductList";
import ProductLoadingSkeleton from "../../../components/ProductLoadingSkeleton";
async function getProducts() {
  const res = await fetch("http://localhost:3000/api/products");
  console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

interface IProps {}

const ProductsPage = async ({}: IProps) => {
  const { products } = await getProducts();
  return (
    <div>
      {/* STATIC TITLE */}
      <h2 className="my-5 text-4xl">Our Latest Products</h2>
      {/* DYNAMIC VALUE */}
      <Suspense fallback={<ProductLoadingSkeleton />}>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
