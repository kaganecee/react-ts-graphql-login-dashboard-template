import { FunctionComponent, useState } from 'react';
import { Button } from '../../components/button';
import { useQuery } from '@apollo/client';
import { USER_INFO_QUERY, PRODUCT_QUERY, ORDER_QUERY } from './query';
import { Header } from '../../components/header';
import { OrderTable } from './components/OrderTable';
import { UserInfoTable } from './components/userInfoTable';
import { ProductsTable } from './components/ProductsTable';
type dashboardProps = {};
export const Dashboard: FunctionComponent<dashboardProps> = () => {
    const { data: userData } = useQuery(USER_INFO_QUERY);
    const { data: ordersData } = useQuery(ORDER_QUERY);
    const limit = 10;
    const index = 1;
    const { data: productData } = useQuery(PRODUCT_QUERY, {
        variables: { limit, index }
    });

    const [activeTable, setActiveTable] = useState('Products');
    const handleUsersTable = () => {
        setActiveTable('Users');
    };
    const handleProductTable = () => {
        setActiveTable('Products');
    };
    const handleOrderTable = () => {
        setActiveTable('Orders');
    };
    return (
        <>
            <Header userName={userData ? userData.user.name : 'User'} />
            <div className="container d-flex flex-column gap-1">
                <div style={{ backgroundColor: '#0066c3' }} className="d-flex gap-2 mt-2">
                    <Button title="List of Products" color="#ff7b1c" event={handleProductTable} />
                    <Button
                        title="List of Orders"
                        color="rgb(98, 142, 255)"
                        event={handleOrderTable}
                    />
                    <Button title="User Info" color="rgb(127, 202, 0)" event={handleUsersTable} />
                </div>
                {activeTable === 'Products' && productData && (
                    <ProductsTable data={productData.products} />
                )}
                {activeTable === 'Orders' && ordersData && <OrderTable data={ordersData.orders} />}
                {activeTable === 'Users' && userData && <UserInfoTable data={userData.user} />}
            </div>
        </>
    );
};
