import React from 'react';
import CommentItem from './CommentItem';
import PropTypes from 'prop-types';

export default function CommentList({ comments }) {
  console.log('Passei por aqui')
  return(
    <> 
      { comments.map((comment) => {
        return(
          <CommentItem key={comment} comment={comment} />
        );
      })}
    </>
  );
};