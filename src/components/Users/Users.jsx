import React from 'react';

const Users = (props) => {
    // const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    // const pages = [];
    // for (let i = 1; i <= pagesCount ; i++) {
    //     pages.push(i)
    // }
    

    return <div>
        {
            props.pageContent
        }
    </div>
}

export default Users;