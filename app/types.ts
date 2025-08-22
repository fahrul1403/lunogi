export type ContentItem = {
  title: string;
  description: string;
  showProductFeature?: boolean;
  imageAbove?: boolean;
  h2image?: string;
  h2middleimage?: boolean;
  imagePosition?: 'left' | 'right';
  sections: Array<{
    type: 'table' | 'list' | 'flex' | 'comparison-table';
    title?: string;
    headers?: string[];
    items: Array<
      | { 
          Feature: string; 
          Specification: string; 
          h4image?: string;
          price?: string;
          purchaseLink?: string;
        }
      | string
      | { title: string; list: string[]; h4image?: string }
      | { category: string; values: string[] }
    >;
    content?: string;
    showProductFeature?: boolean;
    h3image?: string;
    h3middleimage?: boolean;
    h3images?: string[];
  }>;
  alignLeft?: boolean; // Add this new property
  verticalLayout?: boolean; // Add this new property
};

type TableSection = {
  type: 'table';
  title?: string;
  items: Array<{ Feature: string; Specification: string; h4image?: string; price?: string; purchaseLink?: string }>;
};