import ProductList from "./products/ProductList";

export default function Home() {
  return (
    <main>
      <h1 className="text-4xl p-4 font-bold text-center">Product Listing</h1>
      <ProductList />
    </main>
  );
}