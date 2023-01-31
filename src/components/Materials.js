import React,{ useState } from 'react';
import {storage} from '../firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';
import { v4 } from 'uuid';
import Files from './Files';
import './material.css';

function Materials({ isStudent }) {
  const [file, setFile] = useState(null);
  const [fileList, setFileList] = useState([]);
  const [dept, setDept] = useState('cse');

  const uploadFile = () =>{
    if(file == null) return;
    const fileRef = ref(storage,`${dept}/materials/${file.name+v4()}`);
    uploadBytes(fileRef,file).then((snapshot)=>{
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
      alert("file uploaded");
    });
  };

  return (
    <>
      {!isStudent && (
        <>
        <div className='upload_container'>
          <input type="text" onChange={(e)=>setDept(e.target.value)} />
          <input type="file" onChange={(e)=>setFile(e.target.files[0])} />
          <button onClick={uploadFile} >Submit</button>
        </div>
        <div className='files'>
          <Files fileList={fileList} setFileList={setFileList} dept={dept} />
        </div>
        </>
      )}
      {isStudent && (
        <>
        <div className='files'>
          <Files fileList={fileList} setFileList={setFileList} dept={dept} />
        </div>
        </>
      )}
    </>
  );
}

export default Materials;