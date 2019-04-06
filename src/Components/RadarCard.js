import React, { Component, Fragment } from 'react';
import { CardBody, Card } from 'reactstrap';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

class RadarCard extends Component {
  render () {
    const { record } = this.props;

    return (
      <Fragment>
        <h4 className="pb-2 pt-4">{record.name}</h4>
        <Card>
          <CardBody>
            <RadarChart cx={250} cy={150} outerRadius={100} width={450} height={300} data={record.skills}>
              <PolarGrid />
              <PolarAngleAxis dataKey="name" />
              <PolarRadiusAxis />
              <Radar name="Done-hits" dataKey="doneHits" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
              <Radar name="On-going-hits" dataKey="ongoingHits" stroke="#3399cc" fill="#ff0000" fillOpacity={0.6} />
            </RadarChart>
          </CardBody>
        </Card>
      </Fragment>
      );
  }
}

export default RadarCard;
