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
          },
          {
            id: 2,
            author: {
              name: 'Renato Franco',
              avatar: 'https://url-da-imagem.com/image-jpg'
            },
            content: 'Apenas um comentário sem sentido'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Hanzo Kimura',
          avatar: 'https://url-da-imagem.com/image-jpg'
        },
        date: '04 Jun 2019',
        content: 'Pessoal alguem me ajuda com uma duvida em react native?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Bento Hinoto',
              avatar: 'https://url-da-imagem.com/image-jpg'
            },
            content: 'Qual é sua duvida Hanzo?'
          },
          {
            id: 2,
            author: {
              name: 'Anna Mitchel',
              avatar: 'https://url-da-imagem.com/image-jpg'
            },
            content: 'Em que podemos te ajudar?'
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