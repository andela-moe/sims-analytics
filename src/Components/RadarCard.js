import React, { Component, Fragment } from 'react';
import { CardBody, Card } from 'reactstrap';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

class RadarCard extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }

  render () {
    const { record } = this.props;

    return (
        <div className="col-md-5">
          <h3>{record.name}</h3>
          <Card>
                <CardBody>
                  <RadarChart cx={200} cy={150} outerRadius={100} width={400} height={300} data={record.skills}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="name" />
                    <PolarRadiusAxis />
                    <Radar name="Done-hits" dataKey="doneHits" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name="On-going-hits" dataKey="ongoingHits" stroke="#3399cc" fill="#ff0000" fillOpacity={0.6} />
                  </RadarChart>
                </CardBody>
              </Card>
        </div>
      );
  }
}

export default RadarCard;
