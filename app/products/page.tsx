import * as React from "react";
import { Suspense } from "react";
import { ListProductsWrapper } from "@/components/ui/top-products";

export const dynamic = 'force-dynamic';

export default function AllProducts() {
  return (
    <>
      <div className="flex bg-white items-center flex-col mt-5 gap-6 lg:gap-6 max-w-8xl mx-auto py-6 lg:py-8 px-4 lg:px-8 rounded-3xl">
        <Suspense fallback={<div>Loading...</div>}>
          <ListProductsWrapper />
        </Suspense>
      </div>
    </>
  );
}