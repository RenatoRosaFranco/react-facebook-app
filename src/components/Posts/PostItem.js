import React from 'react';
import CommentList from '../Comments/CommentList';
import PropTypes from 'prop-types';

export default function PostItem({ post }) {
  return(
    <div class='card' key={post.id}>
      <div id='heading'>
        <img src={post.author.avatar}/>
        <h4>{post.author.name}</h4>
        <small>{post.date}</small>
      </div>

      <div class='card-body'>
        { post.content }
      </div>

      <CommentList comments={post.comments} />
    </div>
  );
}

PostItem.defaultProps = {

}

PostItem.propTypes = {

}