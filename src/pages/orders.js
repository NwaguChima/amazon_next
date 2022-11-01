import React from "react";
import Header from "../components/Header";

const Orders = () => {
  return (
    <div>
      <Header />

      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b pb-1 border-yellow-400">
          Your Orders
        </h1>
      </main>
    </div>
  );
};

export default Orders;
