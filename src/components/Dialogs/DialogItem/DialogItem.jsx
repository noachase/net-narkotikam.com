import React from 'react';
import styles from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';
import Message from './../Message/Message';

class DialogItem extends React.Component {
    render() {
        let path = "/dialogs/" + this.props.id;

        return (
            <span className={`${styles.dialogs_items} ${styles.active}`}>
                <img className={styles.ava} src={this.props.ava} alt="" />
                <NavLink className={styles.dialog_name} to={path}>{this.props.name}</NavLink>
                {/* <Message /> */}
            </span>
        );
    }
}

export default DialogItem;