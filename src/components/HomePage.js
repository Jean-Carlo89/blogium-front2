import React, { useState, useEffect } from 'react';
import PostList from './PostList/PostList';
import axios from 'axios';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4000/posts')
    .then((response)=>{
      console.log(response.data)

      setPosts(
        response.data
       //[{
     //   id: 1,
     //   title: 'Hello World',
     //   coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
     //   contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
     //   content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
     //   commentCount: 2
     //   },
       
     //   {
     //     id: 2,
     //     title: 'Hello World',
     //     coverUrl: 'https://miro.medium.com/max/1024/1*OohqW5DGh9CQS4hLY5FXzA.png',
     //     contentPreview: 'Esta é a estrutura de um post esperado pelo front-end',
     //     content: 'Este é o conteúdo do post, o que realmente vai aparecer na página do post...',
     //     commentCount: 2
     //   }
     
     // ]
     );
    })

    .catch((responseError)=>{
      console.log(responseError)
      console.log('Erro na requisição')

    })
     
  }, []);

  return (
    <PostList name="Daily stories" posts={posts} />
  );
}
