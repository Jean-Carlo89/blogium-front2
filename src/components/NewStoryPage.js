import { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import PostManipulation from './PostManipulation/PostManipulation';

export default function NewStoryPage() {
  const [title, setTitle] = useState('');
  const [coverUrl, setCoverUrl] = useState('');
  const [content, setContent] = useState('');
  const [isSaveButtonDisabled, setSaveButtonDisable] = useState(false);
  const history = useHistory();

  function onPostSaveButtonClick(title,cover,content) {
     const post = {
       "title":title,
       "coverUrl":cover,
       "contentPreview": 'Esta é a estrutura de um post esperado pelo front-end',
       "content":content,
       "commentCount": 0
     }
    
    axios.post('http://localhost:4000/posts',post,{}
    )
    
    .then((response)=>{
      console.log('enviou')
      console.log(response);
    })
    .catch((responseError)=>{
      console.log('não foi')
      console.log(responseError);
    })
  }

  return (
    <PostManipulation
      title={title}
      onTitleChange={(newTitle) => setTitle(newTitle)}
      coverUrl={coverUrl}
      onCoverUrlChange={(newCoverUrl) => setCoverUrl(newCoverUrl)}
      content={content}
      onContentChange={(newContent) => setContent(newContent)}
      onPostSaveButtonClick={onPostSaveButtonClick}
      isSaveButtonDisabled={isSaveButtonDisabled}
    />
  );
}
