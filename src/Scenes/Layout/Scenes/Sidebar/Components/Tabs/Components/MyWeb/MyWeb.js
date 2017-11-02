import React, { Component } from 'react';

class MyWeb extends Component {
    render() {
        console.log(this.props.viewTest.url);
        return (
            <webview
                src={this.props.viewTest.url}
                style={{marginTop: 20}}
            />
        );
    }
}

export default MyWeb;
