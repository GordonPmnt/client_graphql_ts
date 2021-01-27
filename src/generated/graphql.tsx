import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type ProductCategory = {
  __typename?: 'ProductCategory';
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export enum ProductSize {
  Small = 'SMALL',
  Medium = 'MEDIUM',
  Large = 'LARGE'
}

export type ProductCreateInput = {
  name: Scalars['String'];
  price: Scalars['Int'];
  taxRate?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['ID']>;
  fabricationDate?: Maybe<Scalars['Date']>;
  category?: Maybe<Scalars['ID']>;
};

export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name: Scalars['String'];
  price: Scalars['Int'];
  taxRate?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  size?: Maybe<ProductSize>;
  fabricationDate?: Maybe<Scalars['Date']>;
  category?: Maybe<ProductCategory>;
};

export type Query = {
  __typename?: 'Query';
  hello?: Maybe<Scalars['String']>;
  productList?: Maybe<Array<Maybe<Product>>>;
};

export enum ErrorType {
  ServerError = 'SERVER_ERROR'
}

export type ProductError = {
  __typename?: 'ProductError';
  id: Scalars['ID'];
  message?: Maybe<Scalars['String']>;
  type?: Maybe<ErrorType>;
};

export type ProductResult = ProductError | Product;

export type Mutation = {
  __typename?: 'Mutation';
  productCreate?: Maybe<ProductResult>;
};


export type MutationProductCreateArgs = {
  product: ProductCreateInput;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type CreateProductMutationVariables = Exact<{
  product: ProductCreateInput;
}>;


export type CreateProductMutation = (
  { __typename?: 'Mutation' }
  & { productCreate?: Maybe<(
    { __typename?: 'ProductError' }
    & Pick<ProductError, 'id' | 'message' | 'type'>
  ) | (
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'taxRate'>
    & { category?: Maybe<(
      { __typename?: 'ProductCategory' }
      & Pick<ProductCategory, 'name'>
    )> }
  )> }
);

export type ProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type ProductsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'hello'>
  & { productList?: Maybe<Array<Maybe<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'size' | 'fabricationDate'>
    & { category?: Maybe<(
      { __typename?: 'ProductCategory' }
      & Pick<ProductCategory, 'id' | 'name' | 'description'>
    )> }
  )>>> }
);


export const CreateProductDocument = gql`
    mutation createProduct($product: ProductCreateInput!) {
  productCreate(product: $product) {
    ... on Product {
      id
      name
      price
      taxRate
      category {
        name
      }
    }
    ... on ProductError {
      id
      message
      type
    }
  }
}
    `;
export type CreateProductMutationFn = Apollo.MutationFunction<CreateProductMutation, CreateProductMutationVariables>;

/**
 * __useCreateProductMutation__
 *
 * To run a mutation, you first call `useCreateProductMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProductMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProductMutation, { data, loading, error }] = useCreateProductMutation({
 *   variables: {
 *      product: // value for 'product'
 *   },
 * });
 */
export function useCreateProductMutation(baseOptions?: Apollo.MutationHookOptions<CreateProductMutation, CreateProductMutationVariables>) {
        return Apollo.useMutation<CreateProductMutation, CreateProductMutationVariables>(CreateProductDocument, baseOptions);
      }
export type CreateProductMutationHookResult = ReturnType<typeof useCreateProductMutation>;
export type CreateProductMutationResult = Apollo.MutationResult<CreateProductMutation>;
export type CreateProductMutationOptions = Apollo.BaseMutationOptions<CreateProductMutation, CreateProductMutationVariables>;
export const ProductsDocument = gql`
    query Products {
  hello
  productList {
    id
    name
    price
    size
    fabricationDate
    category {
      id
      name
      description
    }
  }
}
    `;

/**
 * __useProductsQuery__
 *
 * To run a query within a React component, call `useProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProductsQuery({
 *   variables: {
 *   },
 * });
 */
export function useProductsQuery(baseOptions?: Apollo.QueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
        return Apollo.useQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
      }
export function useProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ProductsQuery, ProductsQueryVariables>) {
          return Apollo.useLazyQuery<ProductsQuery, ProductsQueryVariables>(ProductsDocument, baseOptions);
        }
export type ProductsQueryHookResult = ReturnType<typeof useProductsQuery>;
export type ProductsLazyQueryHookResult = ReturnType<typeof useProductsLazyQuery>;
export type ProductsQueryResult = Apollo.QueryResult<ProductsQuery, ProductsQueryVariables>;