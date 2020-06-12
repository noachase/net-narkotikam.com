import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
	return (
		<div className={classes.item}>
			<img alt='post_ava' src='https://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg' />
			{props.message}
			<div>
				<span className={classes.like}>Like </span>
				<span className={classes.likeNumber}>{props.likesCount}</span>
			</div>
		</div>
	)
}

export default Post;