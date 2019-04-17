import React, { Component } from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';

class PieChartCard extends Component {
  render() {

    const { data } = this.props;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="count" cx={200} cy={200} outerRadius={100} fill="#8884d8"
          label 
          >
          {
            data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }</Pie>
        <Tooltip/>
    </PieChart>
    );
  }
}

export default PieChartCard;
