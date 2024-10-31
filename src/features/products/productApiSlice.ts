import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Product from "../../types/product";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com/",
  }),
  endpoints(builder) {
    return {
      fetchProducts: builder.query<Product[], number | void>({
        query(limit = 20) {
          return `/products?limit=${limit}`;
        },
      }),
      fetchOneProduct: builder.query<Product, string>({
        query(id) {
          return `/products/${id}`;
        },
      }),
      fetchCategories: builder.query<string[], void>({
        query() {
          return "/products/categories";
        },
      }),
      fetchProductsByCategory: builder.query<Product[], string>({
        query(category) {
          return `/products/category/${category}`;
        },
      }),
    };
  },
});

export const {
  useFetchProductsQuery,
  useFetchOneProductQuery,
  useFetchCategoriesQuery,
  useFetchProductsByCategoryQuery,
} = apiSlice;
