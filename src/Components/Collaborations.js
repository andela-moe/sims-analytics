import React, { Component, Fragment } from 'react';
import { CardBody, Card } from 'reactstrap';


class Collaborations extends Component {
  renderUsers (collaborations) {
    // console.log(users);
    const usersList = collaborations.map(userDatails => {
      return (<div key={userDatails.user.email} className="col-md-6">
        <div>{ userDatails.user.name }</div>
      </div>
      )
    });

    return (<Fragment>{ usersList }</Fragment>);
  }

  render () {
    const { user } = this.props;
    const userDisplay = user.collaborations.length > 0 ? this.renderUsers(user.collaborations) : 'This developer has not collaborated';

    return (
      <Fragment>
        <h4 className="pb-2 pt-4">{ user.name }</h4>
        <Card>
          <CardBody>
            { userDisplay }
          </CardBody>
        </Card>
      </Fragment>
      );
  }
}

export default Collaborations;
