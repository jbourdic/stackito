import React, {Component} from 'react';
import Pane from './Components/Pane';

class Tab extends Component {
    displayName = 'Tabs';

    constructor() {
        super();

        this.state = {
            selected: 0
        };

        this.handleClick = this.handleClick.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.props !== nextProps || this.state !== nextState;
    };

    handleClick() {
        // event.preventDefault();
        this.setState({
            selected: this.state.selected
        });
    };

    _renderTitle() {
        let activeClass = (this.state.selected === this.key ? 'active' : '');

        return (
            <a href="#"
               className={activeClass}
               onClick={this.handleClick}>
                {this.props.tab.title}
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

