import React, {Component} from 'react';
import Tab from './Components/Tabs/Tab';

class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            selected: 0
        }
    }

    _renderTabs(index, tab) {
        return (
            <li key={index} >
                <Tab tab={tab}/>
            </li>
        )
    };

    handleClick() {
        this.setState({
            selected: 0
        })
    };

    render() {
        let tabs = [];

        for (var i = 0; i < this.props.tabs.length; i++) {
            tabs.push(this._renderTabs(i, this.props.tabs[i]));
        }

        return (
            <div className="row affix-row">
                <div className="col-sm-3 col-md-2 affix-sidebar">
                    <div className="sidebar-nav">
                        <div className="navbar navbar-default" role="navigation">
                            <div className="navbar-header">
                                <ul className="nav navbar-nav" id="sidenav01">
                                    {tabs}
                                    {/*<li><a href="#"><span class="glyphicon glyphicon-lock"></span> Normalmenu</a>
                                    </li>
                                    <li><a href="#"><span class="glyphicon glyphicon-calendar"></span> WithBadges
                                        <span class="badge pull-right">42</span></a></li>
                                    <li><a href=""><span class="glyphicon glyphicon-cog"></span> PreferencesMenu</a>
                                    </li>*/}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="container">test</div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
