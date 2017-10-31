import React, {Component} from 'react';

class Pane extends Component {
    displayName = 'Pane';

    render() {
        return (
            <div>
                {this.props.tab.content}
            </div>
        );
    }
}

export default Pane;