import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.jpg';

let Users = (props) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios
                .get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items)
                });
        }
    }
    
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u => <div key={u.id} className={styles.userWrapper}>
                <div >
                    <div>
                        <img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="" />

                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} className={styles.btnFollow}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} className={styles.btnUnfollow}>Follow</button>}

                    </div>
                </div>
                <div className={styles.userInfo}>
                    <div className={styles.userName}>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{'u.location.country'}</div>
                    <div>{'u.location.city'}</div>
                </div>
            </div>)

        }

    </div>
};

export default Users;