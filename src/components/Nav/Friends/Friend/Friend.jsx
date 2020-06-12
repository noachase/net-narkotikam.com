import React from 'react';
// import classes from './Friend.module.css';

class Friend extends React.Component {
    render() {
        return (
            <div>
                {this.props.friend}
            </div>
        )
    }
}



export default Friend;