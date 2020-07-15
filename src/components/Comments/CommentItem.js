import React from 'react';
import PropTypes from 'prop-types';

export default function CommentItem({ comment }) {
  return(
    <>
      <div key={comment.id}>
        <img src={comment.author.avatar} />
        <p>
          <strong>{comment.author.name}</strong> {comment.content}
        </p>
      </div>
    </>
  )
};