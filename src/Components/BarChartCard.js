import React, { PureComponent } from 'react';
// import { CardBody, Card } from 'reactstrap';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend 
} from 'recharts';

class BarChartCard extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <BarChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="2 4" />
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