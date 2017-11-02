import React, {Component} from 'react';
import Pane from './Components/Pane/Pane';

class Tab extends Component {
    displayName = 'Tabs';
/*
    constructor() {
        super();

        this.state = {
            selected: 0
        };

        this.handleClick = this.handleClick.bind(this)
    }*/

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    };

    _renderTitle() {
        let activeClass = (this.props.tab.selected ? 'active' : '');

        return (
            <a href="#"
               className={activeClass}
               onClick={this.props.handleClick}>
                {this.props.tab.config.title}
            </a>
        );
    };

    _renderContent() {
        return (
            <div className="tabs__content">
                <Pane tab={this.props.tab}/>
            </div>
        );
    };

    render() {
        return (
            <div className="tabs" >
                {this._renderTitle()}
                {this._renderContent()}
            </div>
        );
    }
}

export default Tab;

