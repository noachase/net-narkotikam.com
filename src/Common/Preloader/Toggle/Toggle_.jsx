import React from 'react';

export default class Toggle extends React.Component {
    state = {
        on: false,
    };

    Toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };

    render() {
        return (
            <div>
                {this.state.on && this.props.children}
                <button onClick={this.Toggle}>click</button>
            </div>
        );
    }
}
