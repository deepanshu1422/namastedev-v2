import React from "react";
import Details from "./details";
import Checkout from "./checkout";

export default function page() {
  return (
    <div className="min-h-dvh py-6 max-tab:pt-[1rem] max-tab:pb-[2.5rem] tab:px-10 px-6 max-phone:px-2 m-auto max-w-[90rem] flex">
      <section className="flex gap-4 p-1 max-w-5xl w-full mx-auto">
        <Details />
        <Checkout />
      </section>
    </div>
  );
}
