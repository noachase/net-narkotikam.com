import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../../Common/Preloader/Preloader';

// class ProfileInfo extends React.Component {
// 	componentDidMount() {
// 		let s = this.props;
// 		if (!this.props.profile) {
// 			return <Preloader/>
// 		}
// 	}
// 	render() {
// 		return (
// 			<div>
// 				{/* <div>
// 					<img alt="banner" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
// 				</div> */}
// 				<div className={classes.description_block}>
// 					{/* <img className={classes.ava} alt="avatar" src={this.props.profile.photos.large} /> */}

// 				</div>
// 				<h3 className="name">Eugene Markelov</h3>

// 			</div>
// 		)
// 	}
// }

const ProfileInfo = (props) => {
	if (!props.profile) {
		debugger
		return <Preloader />
	}
	return (
		<div>
			{/* <div>
				<img alt="banner" src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"></img>
			</div> */}
			<div className={classes.description_block}>
				<img className={classes.ava} alt="avatar" src={props.profile.photos.large} />

			</div>
		<h3 className="name">{props.profile.fullName}</h3>
		<div>

		</div>
			{/* {
				props.profile.contacts.map(c => {
					return <div>c</div>
				})
			} */}
		</div>
	)
}

export default ProfileInfo;