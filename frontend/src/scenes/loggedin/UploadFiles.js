import React, { useState } from "react";
import {useMutation, gql} from "@apollo/client";

const UPLOAD_IMAGE = gql`
  mutation ($file: Upload) {
    singleUpload(file: $file)
  }
`;
export function  UploadFiles () {
  
  const [singleUpload, data] = useMutation(UPLOAD_IMAGE,{
    onCompleted: () => {
    alert('File uploded successfully!');
    setnewFile({file: null});
    },
  }
  );
  const [newFile,setnewFile]= useState(null);
  console.log(newFile);
  const handleFileChange = (e) => {
    setnewFile(e.target.files[0]);
};

  const handleSubmit = async (e) => {
    e.preventDefault();
  singleUpload({
   variables: {
      file: newFile
    }
  })
    
  };
return (
      <div>
        <input
          type="file"
          onChange= {handleFileChange}
        />
        <button
            onClick={handleSubmit}>
            Submit File
          </button>
    </div>
  );
};




