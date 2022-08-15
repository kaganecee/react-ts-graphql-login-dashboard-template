import Table from 'react-bootstrap/Table';

export const ProductsTable = ({ data }) => (
    <Table striped="columns">
        <thead>
            <tr>
                <th>Id</th>
                <th>Description</th>
                <th>Unit</th>
                <th>Sale Type</th>
                <th>Notes</th>
            </tr>
        </thead>
        <tbody>
            {data &&
                Object.values(data.products).map((item, idx) => {
                    return (
                        <tr key={idx}>
                            <td>{item.id}</td>
                            <td>{item.description1}</td>
                            <td>{item.unit1}</td>
                            <td>{item.saleType}</td>
                            <td>{item.notes}</td>
                        </tr>
                    );
                })}
        </tbody>
    </Table>
);
