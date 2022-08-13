import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Int64: any;
  Upload: any;
};

export type ChildProductCategory = {
  __typename?: 'ChildProductCategory';
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  visible: Scalars['Boolean'];
};

export type DatabaseUpdate = {
  __typename?: 'DatabaseUpdate';
  cachedData: Scalars['Boolean'];
  categories: Array<ProductCategory>;
  frequentOrderedProducts: Array<Scalars['Int64']>;
  orders: Array<Order>;
  productAttributes: Array<ProductAttribute>;
  productStockReminders: Array<Scalars['Int64']>;
  products: Array<Product>;
  promotions: Array<Scalars['Int64']>;
  snapshotDate?: Maybe<Scalars['Int64']>;
  userFavoriteProducts: Array<Scalars['Int64']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Login mutation. */
  login?: Maybe<Scalars['String']>;
  /** Logout mutation. */
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Order = {
  __typename?: 'Order';
  collectionDate?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  currencyValue?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  details: Array<OrderDetail>;
  discountTotal: Scalars['Float'];
  fulfillmentType: Scalars['String'];
  id: Scalars['Int64'];
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderName: Scalars['String'];
  orderNo: Scalars['String'];
  paymentType: Scalars['String'];
  status: Scalars['Int'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type OrderDetail = {
  __typename?: 'OrderDetail';
  deletedAt?: Maybe<Scalars['String']>;
  discountTotal: Scalars['Float'];
  id: Scalars['Int64'];
  pCode?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  productId: Scalars['Int64'];
  quantity: Scalars['Float'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  unit: Scalars['String'];
  vatRate: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type Product = {
  __typename?: 'Product';
  allowSales?: Maybe<Scalars['String']>;
  attributes: Array<ProductAttribute>;
  barcode1?: Maybe<Scalars['String']>;
  barcode2?: Maybe<Scalars['String']>;
  barcode3?: Maybe<Scalars['String']>;
  catalogCode?: Maybe<Scalars['String']>;
  categories: Array<ProductCategory>;
  code?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  defaultUnit?: Maybe<Scalars['String']>;
  deletedAt?: Maybe<Scalars['String']>;
  description1?: Maybe<Scalars['String']>;
  description2?: Maybe<Scalars['String']>;
  description3?: Maybe<Scalars['String']>;
  id: Scalars['Int64'];
  isFavorites?: Maybe<Scalars['Boolean']>;
  isNew?: Maybe<Scalars['Boolean']>;
  itemType?: Maybe<Scalars['String']>;
  minStock: Scalars['Int'];
  mobilePublished: Scalars['Boolean'];
  notes?: Maybe<Scalars['String']>;
  notes2?: Maybe<Scalars['String']>;
  pSize?: Maybe<Scalars['String']>;
  price?: Maybe<ProductPrice>;
  rawPrices: Array<ProductPriceDetail>;
  saleType?: Maybe<Scalars['Int']>;
  secondaryUnit?: Maybe<Scalars['String']>;
  stockStatus?: Maybe<StockStatus>;
  unit1?: Maybe<Scalars['String']>;
  unit2?: Maybe<Scalars['String']>;
  unitRate1?: Maybe<Scalars['Float']>;
  vat?: Maybe<Scalars['Int']>;
  vatCode?: Maybe<Scalars['String']>;
  webPublished: Scalars['Boolean'];
  weight?: Maybe<Scalars['String']>;
};

export type ProductAttribute = {
  __typename?: 'ProductAttribute';
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
  values: Array<ProductAttributeValue>;
  visible: Scalars['Boolean'];
};

export type ProductAttributeValue = {
  __typename?: 'ProductAttributeValue';
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  childCategories: Array<Maybe<ChildProductCategory>>;
  id: Scalars['Int64'];
  index: Scalars['Int'];
  name: Scalars['String'];
  pictureUrl?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  visible: Scalars['Boolean'];
};

export type ProductPrice = {
  __typename?: 'ProductPrice';
  clearancePrice?: Maybe<ProductPriceDetail>;
  price?: Maybe<ProductPriceDetail>;
  privatePrice?: Maybe<ProductPriceDetail>;
  promoPrice?: Maybe<ProductPriceDetail>;
};

export type ProductPriceDetail = {
  __typename?: 'ProductPriceDetail';
  discount?: Maybe<Scalars['Float']>;
  netParcelPrice?: Maybe<Scalars['Float']>;
  netPrice?: Maybe<Scalars['Float']>;
  parcelPrice?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  priceId: Scalars['Int64'];
};

export type Products = {
  __typename?: 'Products';
  count: Scalars['Int64'];
  products: Array<Product>;
};

export type Query = {
  __typename?: 'Query';
  /** Order detail data. */
  orders?: Maybe<Array<WebOrder>>;
  /**
   * Product list.
   * sortBy: NAME_DESC, NAME_ASC, PRICE_DESC, PRICE_ASC
   * query: not required
   * filterCategories: not required
   * filterCategories: not required
   * filterNewProducts: false
   * filterPromotions: false
   * filterClearance: false
   * filterFavorites: false
   * filterBarcode: not required
   * ---
   * index: 0
   * limit: 10
   * ...
   * index: 10
   * limit: 10
   * ...
   * index: 20
   * limit: 10
   */
  products?: Maybe<Products>;
  /** Using this query, you can get user details or check token is working. */
  user?: Maybe<User>;
};


export type QueryOrdersArgs = {
  endDate?: InputMaybe<Scalars['String']>;
  startDate?: InputMaybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  filterAttributeValues?: InputMaybe<Array<Scalars['Int64']>>;
  filterBarcode?: InputMaybe<Scalars['String']>;
  filterCategories?: InputMaybe<Array<Scalars['Int64']>>;
  filterClearance?: InputMaybe<Scalars['Boolean']>;
  filterFavorites?: InputMaybe<Scalars['Boolean']>;
  filterNewProducts?: InputMaybe<Scalars['Boolean']>;
  filterPromotions?: InputMaybe<Scalars['Boolean']>;
  index: Scalars['Int'];
  limit: Scalars['Int'];
  query?: InputMaybe<Scalars['String']>;
  sortBy?: InputMaybe<Scalars['String']>;
};

export type StockStatus = {
  __typename?: 'StockStatus';
  available: Scalars['Boolean'];
  lowStock: Scalars['Boolean'];
  saleType: Scalars['Int'];
  suspended: Scalars['Boolean'];
};

export type User = {
  __typename?: 'User';
  address1?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  address3?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  companyName?: Maybe<Scalars['String']>;
  contact?: Maybe<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactName?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  creditLimit?: Maybe<Scalars['Float']>;
  currencyCode?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  fax?: Maybe<Scalars['String']>;
  firebaseUserUID?: Maybe<Scalars['String']>;
  marketingEmailEnabled: Scalars['Boolean'];
  marketingNotificationEnabled: Scalars['Boolean'];
  marketingSmsEnabled: Scalars['Boolean'];
  mobile?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  postCode?: Maybe<Scalars['String']>;
  showAllPricesIncludingVat: Scalars['Boolean'];
  telephone?: Maybe<Scalars['String']>;
  telephone2?: Maybe<Scalars['String']>;
  userCode?: Maybe<Scalars['String']>;
};

export type WebOrder = {
  __typename?: 'WebOrder';
  collectionDate?: Maybe<Scalars['String']>;
  currency?: Maybe<Scalars['String']>;
  currencyCode?: Maybe<Scalars['String']>;
  currencyValue?: Maybe<Scalars['Float']>;
  deletedAt?: Maybe<Scalars['String']>;
  deliveryDate?: Maybe<Scalars['String']>;
  details: Array<WebOrderDetail>;
  discountTotal: Scalars['Float'];
  fulfillmentType: Scalars['String'];
  id: Scalars['Int64'];
  notes?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  orderName: Scalars['String'];
  orderNo: Scalars['String'];
  paymentType: Scalars['String'];
  status: Scalars['Int'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type WebOrderDetail = {
  __typename?: 'WebOrderDetail';
  deletedAt?: Maybe<Scalars['String']>;
  discountTotal: Scalars['Float'];
  id: Scalars['Int64'];
  price: Scalars['Float'];
  product: Product;
  quantity: Scalars['Float'];
  subTotal: Scalars['Float'];
  total: Scalars['Float'];
  unit: Scalars['String'];
  vatRate: Scalars['Float'];
  vatTotal: Scalars['Float'];
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutationMutation = { __typename?: 'Mutation', login?: string | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login?: string | null };


export const LoginMutationDocument = gql`
    mutation LoginMutation($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationMutationFn = Apollo.MutationFunction<LoginMutationMutation, LoginMutationMutationVariables>;

/**
 * __useLoginMutationMutation__
 *
 * To run a mutation, you first call `useLoginMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutationMutation, { data, loading, error }] = useLoginMutationMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutationMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutationMutation, LoginMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutationMutation, LoginMutationMutationVariables>(LoginMutationDocument, options);
      }
export type LoginMutationMutationHookResult = ReturnType<typeof useLoginMutationMutation>;
export type LoginMutationMutationResult = Apollo.MutationResult<LoginMutationMutation>;
export type LoginMutationMutationOptions = Apollo.BaseMutationOptions<LoginMutationMutation, LoginMutationMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password)
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;