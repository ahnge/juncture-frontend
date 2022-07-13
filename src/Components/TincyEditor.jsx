import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function TincyEditor({setDescription,setEmail, name , setMail}) {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      if(setDescription){
        setDescription((editorRef.current.getContent()));
      }else if(setEmail){
        setEmail((editorRef.current.getContent()));
      }else if (setMail){
        setMail((editorRef.current.getContent()))
      }
    }
  };
  return (
    <div className='mt-12'>
      <Editor
        apiKey='bc2sqv5g9p0kc037m0jpryvu5um84gktzqskpgi6ryeowjl5'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue={name && `<p>${name}</p>`}
        onChange={log}
        init={{
          height: 300,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
    </div>
  );
}