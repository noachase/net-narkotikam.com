import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

// class Profile extends React.Component {
// 	render(){
// 		return (
// 			<div>
// 				<ProfileInfo profile={this.props.profile} />
// 				<MyPostsContainer />
// 			</div>
// 		)
// 	}
// }

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} />

			<MyPostsContainer />
		</div>
	)
}

export default Profile;