import React from 'react';
// import classes from './../Dialogs.module.css';

class Message extends React.Component {
    render() {
        return (
            <div>
                {this.props.message}
                <div value={this.props.newDialogMsg}/>
            </div>
        )
    }
}

export default Message;