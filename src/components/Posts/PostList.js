import React, { Component } from 'react';
import PostItem from './PostItem';
import CommentList from '../Comments/CommentList';
import PropTypes from 'prop-types';

//import CommentList from './components/CommentList';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Julio Alcantara',
          avatar: 'http://url-da-imagem.com/imagem.jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://url-da-imagem.com/image-jpg'
            },
            content: 'Conteudo do comentário'
          }
        ]
      }
    ]
  }

  render() {
    let posts = this.state.posts;
    
    return(
      <> 
        { posts.map(post => {
          return <PostItem key={post.id} post={post} />
        })}
      </>
    );
  }
}

export default PostList;