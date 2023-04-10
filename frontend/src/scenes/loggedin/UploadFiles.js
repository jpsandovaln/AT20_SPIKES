import React, { useState } from "react";
import {useMutation} from "@apollo/client";
import { UPLOAD_FILE } from "../../graphql/user.js";

export function  UploadFiles () {
  
  const [singleUpload, data] = useMutation(UPLOAD_FILE,{
    onCompleted: () => {
    console.log(data);
    alert('File uploded successfully!');
    setnewFile({file: null});
    },
  }
  );
  const [newFile,setnewFile]= useState(null);
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




