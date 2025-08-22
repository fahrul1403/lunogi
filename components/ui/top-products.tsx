"use client";
import { useState, useEffect } from 'react';
import ProductCard from "./product-card";
import { products } from './productData';
import { useSearchParams } from 'next/navigation';
import { TopProductsHeader } from './TopProductsHeader';

export function FeaturedProducts() {
  const limitedProducts = products.slice(0, 8);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-6 p-8 rounded-3xl bg-slate-100 w-full">
      {limitedProducts.map((product, index) => (
        <ProductCard
          key={index}
          productImage={product.productImage || ''}
          productName={product.productName}
          productDescription={product.productDescription}
          rating={product.rating}
          amountSold={product.amountSold}
          price={product.price}
          link={product.link}
        />
      ))}
    </div>
  );
}

export function TopProducts() {
  const limitedProducts = products.slice(0, 8);

  return (
    <>
      <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-slate-100 w-full">
        <TopProductsHeader 
          title="Our Top Products"
          additionalText="Featured Product"
          productImage={limitedProducts[0].productImage || ''}
          productName={limitedProducts[0].productName}
          rating={limitedProducts[0].rating}
          amountSold={limitedProducts[0].amountSold}
          price={limitedProducts[0].price}
          link={limitedProducts[0].link}
        />
      </div>
    </>
  );
}

export function ListProducts(){
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [visibleProducts, setVisibleProducts] = useState(12);
    const searchParams = useSearchParams();

    useEffect(() => {
        const category = searchParams.get('category');
        if (category) {
            setSelectedCategory(category);
            setVisibleProducts(12);
        }
    }, [searchParams]);

    const categories = ['All', 'Supplements', 'Gadgets', 'Electronics', 'Fashion', 'Outdoors'];

    const filteredProducts = products.filter(product =>
        (selectedCategory === 'All' || product.link.toLowerCase().includes('/' + selectedCategory.toLowerCase() + '/')) &&
        (product.productName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.productDescription.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleShowMore = () => {
        setVisibleProducts(prev => prev + 12);
    };

    const handleShowAll = () => {
        setVisibleProducts(filteredProducts.length);
    };

    return (
        <>
            <div className="flex flex-col space-y-3 p-8 rounded-3xl bg-slate-100 w-full">
                <div className="flex flex-row justify-between w-full lg:pb-4 pb-2">
                    <h3 className="text-xl lg:text-2xl text-slate-700 font-semibold">Our Products</h3>
                </div>
                <div className="flex flex-col lg:flex-row gap-4 mb-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full lg:w-2/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full lg:w-1/3 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {categories.map((category) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 lg:gap-6 w-full">
                    {filteredProducts.slice(0, visibleProducts).map((product, index) => (
                        <ProductCard
                            key={index}
                            productImage={product.productImage || ''}
                            productName={product.productName}
                            productDescription={product.productDescription}
                            rating={product.rating}
                            amountSold={product.amountSold}
                            price={product.price}
                            link={product.link}
                        />
                    ))}
                </div>

                {visibleProducts < filteredProducts.length && (
                    <div className="flex justify-center gap-4 mt-6">
                        <button
                            onClick={handleShowMore}
                            className="my-10 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                        >
                            Show More
                        </button>
                        <button
                            onClick={handleShowAll}
                            className="my-10 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors"
                        >
                            Show All ({filteredProducts.length} Products)
                        </button>
                    </div>
                )}
            </div>
        </>
    )
}

export function ListProductsWrapper() {
    return (
        <ListProducts />
    );
}