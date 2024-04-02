import { IProduct } from "@/interfaces/page";
import Link from "next/link";

interface IProps {
  products: IProduct[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  return (
    <>
      {products.map(({ id, title }: { id: number; title: string }) => (
        <h3 key={id}>
          <Link href={`/products/${id}`}>
            ID {id} - {title}
          </Link>
        </h3>
      ))}
    </>
  );
};

export default ProductList;
