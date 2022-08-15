import Table from 'react-bootstrap/Table';
export const OrderTable = ({ data }) => (
    <Table striped="columns">
        <thead>
            <tr>
                <th>Id</th>
                <th>Order Name</th>
                <th>Status</th>
                <th>Total</th>
                <th>Currency</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            {data &&
                data.map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.orderName}</td>
                            <td>{item.status}</td>
                            <td>{item.total}</td>
                            <td>{item.currency}</td>
                            <td>{item.notes}</td>
                        </tr>
                    );
                })}
        </tbody>
    </Table>
);
