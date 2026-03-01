// #1 Data model for one product/article record coming from the backend API.
export interface Article {
  // #1.1 Unique identifier used for update/delete operations.
  id: number;
  // #1.2 Display name of the product.
  name: string;
  // #1.3 Unit price used in dashboard/product value calculations.
  price: number;
  // #1.4 Available quantity in inventory.
  stock: number;
  // #1.5 Image URL/path for product preview.
  image: string;
}
