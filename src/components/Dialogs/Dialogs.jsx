import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

class Dialogs extends React.Component {
    constructor(props) {
        super(props)

        this.onSendMessageClick = () => {
            this.props.sendMessage();
        }
        this.onNewMessageChange = (e) => {
            let body = e.target.value;
            this.props.updateNewMessageBody(body)
        }
    }

    render() {
        const state = this.props.dialogsPage;

        const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />);
        const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
        const newMessageBody = state.newMessageBody;
        return (
            <div className={classes.dialogs}>
                <div className={classes.dialogs_items}>
                    {dialogsElements}
                </div>
                <div className={classes.message}>
                    <div>{messagesElements}</div>
                    <div>
                        <div>
                            <textarea
                                value={newMessageBody}
                                onChange={this.onNewMessageChange}
                                placeholder='Enter your message'>
                            </textarea>
                        </div>
                        <div>
                            <button
                                className={classes.btnSend}
                                onClick={this.onSendMessageClick}>
                                Send
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

// const Dialogs = (props) => {
//     // debugger
//     const state = props.dialogsPage;

//     const dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} ava={d.ava} />);
//     const messagesElements = state.messages.map(m => <Message message={m.message} key={m.id} />);
//     const newMessageBody = state.newMessageBody;


//     const onSendMessageClick = () => {
//         props.sendMessage();
//     }

//     const onNewMessageChange = (e) => {
//         let body = e.target.value;
//         props.updateNewMessageBody(body)
//     }

//     return (
//         <div className={classes.dialogs}>
//             <div className={classes.dialogs_items}>
//                 {dialogsElements}
//             </div>
//             <div className={classes.message}>
//                 <div>{messagesElements}</div>
//                 <div>
//                     <div>
//                         <textarea
//                             value={newMessageBody}
//                             onChange={onNewMessageChange}
//                             placeholder='Enter your message'>
//                         </textarea>
//                     </div>
//                     <div>
//                         <button
//                             className={classes.btnSend}
//                             onClick={onSendMessageClick}>
//                             Send
//                         </button>
//                     </div>
//                 </div>

//             </div>
//         </div>
//     )
// }

export default Dialogs;