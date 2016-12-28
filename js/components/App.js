import React from 'react';
import Relay from 'react-relay';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Collections list</h1>
          <ul>
            {this.props.bucket.collections.edges.map(edge =>
              <li key={edge.node.id}>{edge.node.title} (ID: {edge.node.id})</li>
            )}
          </ul>
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    bucket: () => Relay.QL`
      fragment on Bucket {
        collections(first: 10) {
          edges {
            node {
              id,
              title,
            },
          },
        },
      }
    `,
  },
});
