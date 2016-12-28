import React from 'react';
import Relay from 'react-relay';
import { SchemaForm } from 'react-schema-form';

class App extends React.Component {
  props: {
  };

  render() {
    let _onModelChange = function(key, val) {
        //console.log(key, val);
    }

    return (
      <div>
            {this.props.bucket.collections.edges.map((edge, i) =>
              <SchemaForm
                        key={i}
                        id={`title-${i}`}
                        schema={ JSON.parse( edge.node.fschema ) }
                        form={ JSON.parse( edge.node.form ) }
                        model={ JSON.parse( edge.node.model ) }
                        onModelChange={_onModelChange} />
            )}
      </div>
    );
  }
}

export default Relay.createContainer(App, {
  fragments: {
    bucket: () => Relay.QL`
      fragment on Bucket {
        collections(first: 5) {
          edges {
            node {
              id,
              title,
              form,
              fschema,
              model,
            },
          },
        },
      }
    `,
  },
});
