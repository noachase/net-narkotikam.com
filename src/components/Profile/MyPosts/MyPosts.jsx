import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


class MyPosts extends React.Component {

	constructor(props) {
		super(props);

		this.newPostElementRef = React.createRef()
		// this.postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />).reverse()
	}

	onAddPost = () => {
		this.props.addPost();
	};

	onPostChange = () => {
		let text = this.newPostElementRef.current.value;
		this.props.updateNewPostText(text);
	};

	render() {
		let postsElements = this.props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />).reverse()
		return (
			<div className={classes.posts_block}>
				{/* <h3>Посты</h3> */}
	
				<div className={classes.myposts}> <h1>Новые посты</h1></div>
				<div>
					<div>
						<textarea rows="4" cols="40" onChange={this.onPostChange} ref={this.newPostElementRef} value={this.props.newPostText}></textarea>
					</div>
					<div>
						<button className={classes.addPostBtn} onClick={this.onAddPost}>Add post</button>
					</div>
	
				</div>
				<div className={classes.post}>
					{postsElements}
				</div>
			</div>
		)
	}
}

export default MyPosts;