import React, { Component, Fragment } from 'react';
import { Button } from 'reactstrap';
import RadarCard from './RadarCard';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      report: {}
    };
  }

  async componentDidMount() {
    try {
      // https://andela-teams-slack.herokuapp.com/api/analytics/pt/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiIyMjQwNDAzIiwiYW5hbHl0aWNzVHlwZSI6ImthbmJhbl92aWV3IiwiZW5kRGF0ZSI6IjIwMTktMDMtMTFUMTE6NDg6NDguNjQxWiIsInN0YXJ0RGF0ZSI6IjIwMTktMDEtMDdUMTE6NDg6NDguNjU4WiIsImlhdCI6MTU1MjMwNTAyM30.Tventv2YJqwjWL0LBVi3nPQcriCI_lZdAt2aWbWi6Qg
      const getAnalytics = await fetch(
        `https://andela-teams-slack.herokuapp.com/api/analytics/pt/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9qZWN0SWQiOiIyMjQwNDAzIiwiYW5hbHl0aWNzVHlwZSI6InVzZXJzX3ZzX3NraWxscyIsImVuZERhdGUiOiIyMDE5LTAzLTExVDExOjQ0OjIwLjkxNFoiLCJzdGFydERhdGUiOiIyMDE5LTAxLTA3VDExOjQ0OjIwLjk3OFoiLCJpYXQiOjE1NTIzMDQ3MDN9.DC0DbYwvrB1naVHz6oEtOWIR30MOhWiIeA4vjxgNIww`
      );
      const analytics = await getAnalytics.json();
      this.setState({ records: analytics.records });
    } catch (error) {
      return error;
    }
  }

  renderRecords(records) {
    const recordItems = records.map(record => {
      return (<RadarCard key={record.email} record={record}>{ record.name }</RadarCard>)
    });

    return (<div className="analytics row">{recordItems}</div>)
  }

  render() {
    const { records } = this.state;
    const recordListing = records ? this.renderRecords(records) : <div className="">No records</div>

    return (
      <Fragment>

      <main role="main" className="col-md-12 col-lg-12 pt-3 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
            <h1 className="h2">The name of the display</h1>
          </div>

          <div className="container">
            { recordListing }
          </div>
        </main>
      </Fragment>
    );
  }
}

export default Overview;

// {/* <nav className="col-md-2 d-none d-md-block bg-light sidebar">
// <div className="sidebar-sticky">
//   { developerList }
// </div>
// </nav> */}

// <div className="btn-toolbar mb-2 mb-md-0">
// <div className="btn-group mr-2">
//   <button className="btn btn-sm btn-outline-secondary">Share</button>
//   <button className="btn btn-sm btn-outline-secondary">Export</button>
// </div>
// </div>