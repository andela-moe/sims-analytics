import React, { Component, Fragment } from 'react';
import { CardBody, Card } from 'reactstrap';
import RadarCard from './RadarCard';
import BarChartCard from './BarChartCard';
import PieChartCard from './PieChartCard';


class ChartParser extends Component {
  radarDisplay(records) {
    console.log(records)
    const recordItems = records.map(record => {
      return (<div key={record.email} className="col-md-6">
        <RadarCard record={record}>{ record.name }</RadarCard>
      </div>
      )
    });

    return (<Fragment>{ recordItems }</Fragment>);
  }

  kanbanDisplay(kanban) {
    return (<Fragment>
      <div className="col-md-6">
        <Card>
          <CardBody><PieChartCard data={ kanban }/></CardBody>
        </Card>
      </div>
      <div className="col-md-6">
        <Card>
          <CardBody><BarChartCard data={ kanban }/></CardBody>
        </Card>
      </div>
      </Fragment>);
  }

  handleChart(props) {
    switch (props.reportType) {
      case 'users-skills':
        return this.radarDisplay(props.records);

      case 'kanban':
        return this.kanbanDisplay(props.records);

      default:
        break;
    }
  }

  render() {
    const chartChoice = this.props.records.length > 0 && this.props.reportType
    ? this.handleChart(this.props)
    : console.log('no');
    
    return (
      <div className="analytics row">
        { chartChoice }
      </div>
    );
  }
}

export default ChartParser;