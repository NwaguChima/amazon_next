import { getSession, useSession } from "next-auth/react";
import React from "react";
import Header from "../components/Header";

const Orders = ({ orders }) => {
  const { data: session } = useSession();

  return (
    <div>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b pb-1 mb-2 border-yellow-400">
          Your Orders
        </h1>

        {session ? (
          <h2> {"X orders"} </h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4"></div>
      </main>
    </div>
  );
};

export default Orders;

export async function getServerSideProps(context) {
  const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

  // Get user logged in credentials...
  const session = await getSession(context);

  if (!session) {
    return {
      props: {},
    };
  }

  const stripeOrders = await stripe.orders.list();
}
