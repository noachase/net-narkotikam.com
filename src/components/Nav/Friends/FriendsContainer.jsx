import Friends from './Friends';
import { connect } from 'react-redux';
// import { NavLink } from 'react-router-dom';


const mapStateToProps = (state) => {
    // debugger;
    return {
        friends: state.sidebar
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateFriendList: () => {
            console.log('Friend list updated');
        }
    }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)




export default FriendsContainer;