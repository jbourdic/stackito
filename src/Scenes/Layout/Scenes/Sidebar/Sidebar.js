import React, {Component} from 'react';
import Tab from './Components/Tabs/Tab';

class Sidebar extends Component {



    constructor(props) {
        super(props);
        const tabs = [];

        for (var tab of this.props.tabs) {
            tabs.push({'selected': 0, 'config': tab});
        }

        this.state = {
            tabs: tabs,
            selected: 0
        };
    }

    renderTabs(index, tab) {
        return (
            <li key={index} >
                <Tab tab={this.state.tabs[index]} handleClick={() => this.handleTabClick(index)}/>
            </li>
        )
    };

    handleTabClick(index) {
        const tabs = this.state.tabs.slice();

        for (var tab of tabs) {
            tab.selected = false;
        }

        tabs[index]['selected'] = true;

        this.setState({
            tabs: tabs
        })
    };

    render() {
        let tabs = [];

        for (var i = 0; i < this.state.tabs.length; i++) {
            tabs.push(this.renderTabs(i, this.state.tabs[i]));
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
