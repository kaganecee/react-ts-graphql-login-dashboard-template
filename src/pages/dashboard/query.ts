import { gql } from '@apollo/client';

export const PRODUCT_QUERY = gql`
    query Product($index: Int!, $limit: Int!) {
        products(index: $index, limit: $limit) {
            count
            products {
                id
                description1
                unit1
                saleType
                notes
            }
        }
    }
`;
export const ORDER_QUERY = gql`
    query Order {
        orders {
            orderName
            id
            currency
            notes
            status
            total
            details {
                id
                unit
                price
                total
            }
        }
    }
`;
export const USER_INFO_QUERY = gql`
    query User {
        user {
            name
            telephone
            email
            companyName
            country
            city
        }
    }
`;
