import { FunctionComponent } from 'react';
import Table from 'react-bootstrap/Table';
type userInfoProps = {
    data: Array<String>;
};
export const UserInfoTable: FunctionComponent<userInfoProps> = ({ data }) => (
    <Table striped="columns">
        <thead>
            <tr>
                {Object.keys(data).map((item, idx) => {
                    return <th key={idx}>{item}</th>;
                })}
            </tr>
        </thead>
        <tbody>
            <tr>
                {Object.values(data).map((item, idx) => {
                    return <td key={idx}> {item}</td>;
                })}
            </tr>
        </tbody>
    </Table>
);
