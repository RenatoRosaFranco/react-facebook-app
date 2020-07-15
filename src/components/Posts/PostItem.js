import React from 'react';
import CommentList from '../Comments/CommentList';
import PropTypes from 'prop-types';

export default function PostItem({ post }) {
  return(
    <div key={post.id}>
      <div id='heading'>
        <img src={post.author.avatar}/>
        <h4>{post.author.name}</h4>
        <small>{post.date}</small>
      </div>

      <div id='body'>
        { post.content }
      </div>

      <CommentList comments={post.comments} />
    </div>
  );
}
