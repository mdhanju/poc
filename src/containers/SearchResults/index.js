import React from 'react';
import {Table} from 'reactstrap';

function RenderLoadHead() {
    return (<thead>
        <tr>
            <th>ID</th>
            <th>Check#</th>
            <th>Account</th>
            <th>Amount</th>
            <th>EOB</th>
            <th>Date</th>
        </tr>
    </thead>)
}

function RenderLoadBodyItems({
    item = {}
}) {
    return (<tr>
        <td>{item.id}</td>
        <td>{item.checkNo}</td>
        <td>{item.account}</td>
        <td>{item.amount}</td>
        <td>{item.eob}</td>
        <td>{item.date}</td>
    </tr>)
}

class SearchResults extends React.Component {
    render() {
        return (<Table responsive="responsive">
            <RenderLoadHead/>
            <tbody>
                {this.props.items && this.props.items.map((item, i) => <RenderLoadBodyItems key={i} item={item}/>)}
            </tbody>
        </Table>)
    }
}

export default SearchResults;
