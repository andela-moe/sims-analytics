import React, { PureComponent } from 'react';
// import { CardBody, Card } from 'reactstrap';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

class BarChartCard extends PureComponent {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="title" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
        <Bar dataKey="percent" fill="#82ca9d" />
      </BarChart>
    );
  }
}

export default BarChartCard;