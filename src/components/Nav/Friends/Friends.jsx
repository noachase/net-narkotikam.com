import React from 'react';
import classes from './Friends.module.css';
import Friend from './Friend/Friend';
// import { NavLink } from 'react-router-dom';


class Friends extends React.Component {
    render() {
        const state = this.props.friends
        const friendsElements = state.friends.map(f => <Friend friend={f.name} key={f.id} />)
        return (
            <div className={classes.item}>
                <br />

                <div className={classes.friends}>
                    Friends
                </div>

                {friendsElements}

            </div>
        )
    }
}

// const Friends = (props) => {
//     // console.log(props)
//     const state = props.friends
//     const friendsElements = state.friends.map(f => <Friend friend={f.name} key={f.id} />)

//     return (
//         <div className={classes.item}>
//             <br />

//             <div className={classes.friends}>
//                 Friends
//             </div>

//             {friendsElements}

//         </div>


//     )
// }

export default Friends;