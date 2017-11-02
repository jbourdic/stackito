import React, {Component} from 'react';
import MyWeb from '../MyWeb/MyWeb';

class Pane extends Component {
    displayName = 'Pane';

    render() {
        console.log(this.props.tab.config);
        return (
            <div className="col-md-9 right" style={{display: this.props.tab.selected ? 'block': 'none'}}>
                <MyWeb viewTest={this.props.tab.config}/>
            </div>
        );
    }
}

export default Pane;