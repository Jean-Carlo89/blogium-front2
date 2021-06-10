import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom'
import Button from '../../Button';

export default function AddComment({ postId }) {
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory()
  function onAddCommentButtonClick(postId) {
    //alert('No futuro isso vai adicionar o comentário :)');
    const comment = {
      name:name,
      content:content

    }
    axios.post(`http://localhost:4000/posts/${postId}/comments`,comment,{})
    .then((response)=>{
      console.log('comentario enviado')
      console.log(response.data)
    })
    .catch((responseError)=>{
      console.log('Erro ao enviar comentario' )
      console.log(responseError)
    })



    setName('');
    setContent('');
    history.push(`/posts/${postId}`)
  }

  return (
    <>
      <Title>Add a comment</Title>
      <Input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <CommentBox placeholder="Share your thoughts..." value={content} onChange={e => setContent(e.target.value)}></CommentBox>
      <Button onClick={()=>onAddCommentButtonClick(postId)}>Add Comment</Button>
    </>
  );
}

const Title = styled.h1`
  margin-top: 50px;
  margin-bottom: 0;
  font-size: 1.6em;
`;

const Input = styled.input`
  padding-top: 5px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.3;
  letter-spacing: -0.015em;
  width: 100%;
  border: 0;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-left: -2.63px;
  }

  &::placeholder {
    font-style: italic;
  }
`;

const CommentBox = styled.textarea`
  border: 0;
  border-bottom: 1px solid var(--color-devider-light_gray);
  padding: 0;
  padding-bottom: 10px;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  width: 100%;
  min-height: 120px;

  &::placeholder {
    font-style: italic;
  }
`;
