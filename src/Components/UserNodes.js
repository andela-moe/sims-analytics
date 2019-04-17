import React, { Component } from 'react';
import {Sigma, RandomizeNodePositions, RelativeSize} from 'react-sigma';

class UserNodes extends Component {
  render() {

    let myGraph = {nodes:[{id:"n1", label:"Alice"}, {id:"n2", label:"Rabbit"}], edges:[{id:"e1",source:"n1",target:"n2",label:"SEES"}]};

    return (
      <div>
        <Sigma graph={myGraph} settings={{drawEdges: true, clone: false}}>
          <RelativeSize initialSize={15}/>
          <RandomizeNodePositions/>
        </Sigma>
      </div>
    );
  }
}

export default UserNodes;