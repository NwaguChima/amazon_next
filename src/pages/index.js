import { getSession } from "next-auth/react";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>

      <Header />

      <main className="max-w-screen-2xl mx-auto">
        {/* Banner */}
        <Banner />

        {/* product feed */}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  let products = await fetch("https://fakestoreapi.com/products").then((res) =>
    res.json()
  );

  // multiply product price by 100 to convert to cents
  products = products.map((product) => ({
    ...product,
    price: product.price * 100,
  }));

  return {
    props: {
      products,
      session,
    },
  };
}
