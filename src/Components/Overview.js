import React, { Component } from 'react';
import ChartParser from './ChartParser';

class Overview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      records: [],
      reportType: ''
    };
  }

  /**
   * Get the jwt toke from the url
   * build the server url to be consistent with UI rendering
   * frontend url should indicate what view to display
   */
  async componentDidMount() {
    
    const { token } = this.props.match.params;
    const baseUrl = `https://andela-teams-bot.herokuapp.com/api/analytics/pt/`;

    try {
      const getAnalytics = await fetch(`${baseUrl}${token}`);
      const analytics = await getAnalytics.json();
      this.setState({ 
        records: analytics.records,
        reportType: this.props.match.path.split('/')[1],
       });
    } catch (error) {
      return error;
    }
  }

  renderRecords(records) {
    return (<ChartParser records={records} reportType={this.state.reportType}/>)
  }

  render() {
    const { records, reportType } = this.state;
    const recordDisplay = records ? this.renderRecords(records) : <div className="">No records</div>

    return (
      <main role="main" className="col-md-12 col-lg-12 pt-3">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3">
          <div className="container">
            <h2 className="h2 titleHeader">{ reportType }</h2>
          </div>
        </div>

        <div className="container">
          {recordDisplay}
        </div>
      </main>
    );
  }
}

export default Overview;
