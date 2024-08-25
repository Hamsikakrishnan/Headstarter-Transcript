// components/TextEditor.js
import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = () => {
  const [editorHtml, setEditorHtml] = useState('');

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  return (
    <div>
      <ReactQuill
        value={editorHtml}
        onChange={handleChange}
        theme="snow"
      />
      <div>
        <h2>Output</h2>
        <div dangerouslySetInnerHTML={{ __html: editorHtml }} />
      </div>
    </div>
  );
};

export default TextEditor;
