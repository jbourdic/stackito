import React, {Component} from 'react';
import Header from './Header/Header';
import Sidebar from './Scenes/Sidebar/Sidebar';

class Layout extends Component {
    Tabs = [
        {
            'title': 'facebook',
            'type': 'webview',
            'url': 'https://facebook.com',
            'content': 'FACEBOOK',
        },
        {
            'title': 'twitter',
            'type': 'webview',
            'url': 'https://twitter.com',
            'content': 'TWITTER',

        },
        {
            'title': 'starterre',
            'type': 'webview',
            'url': 'https://starterre.fr',
            'content': 'STARTERRE',

        },
    ];

    render() {
        return (
            <div className="Layout">
                <div className="row affix-row">
                    <div className="col-md-12">
                        <Header/>
                    </div>
                </div>
                <div className="row affix-row">
                    <Sidebar tabs={this.Tabs}/>
                </div>
            </div>
        );
    }
}

export default Layout;