import React, { createContext, useState, useContext, ReactNode } from 'react';

interface ProductContextType {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <ProductContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};