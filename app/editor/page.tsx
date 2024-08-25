// import 'react-quill/dist/quill.snow.css'; 
// import TextEditor from '../TextEditor';
// export default function editor() {
//     return(
//         <div>
//           <h1>My Next.js App with Text Editor</h1>
//           <TextEditor />
//         </div>
//     );
//   }


"use client"; // This should be at the very top of the file

import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import the styles for React Quill
import styles from "../page.module.css";

const editor = () => {
  const [editorContent, setEditorContent] = useState<string>("");

  const handleEditorChange = (content: string) => {
    setEditorContent(content);
  };

  return (
    <div className={styles.container1}>
      
        <ReactQuill
          value={editorContent}
          onChange={handleEditorChange}
          className={styles.editor}
        />
       
    </div>
  );
};

export default editor;
  