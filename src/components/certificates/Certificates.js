import React,{ useState,useEffect } from 'react'
import { Button,Form } from 'react-bootstrap';
import {storage} from '../../firebase';
import {ref, uploadBytes, getDownloadURL,listAll} from 'firebase/storage';
import './certificates.css';

function Certificates() {
	const [file, setFile] = useState(null);
	const [fileList, setFileList] = useState([]);
  	const [dept] = useState('cse');

	const uploadFile = () =>{
	  if(file == null) return;
	  const fileRef = ref(storage,`${dept}/Certificates/${file.name}`);
	  uploadBytes(fileRef,file).then((snapshot)=>{
	    getDownloadURL(snapshot.ref).then((url) => {
	      setFileList((prev) => [...prev, url]);
	    });
	    alert("file uploaded");
	  });
	};

	const fileListRef = ref(storage,`${dept}/Certificates/`);
	useEffect(() => {
		listAll(fileListRef).then((response)=>{
			response.items.forEach((item)=>{
				getDownloadURL(item).then((url)=>{
					setFileList((prev)=>[...prev,url])
				})
			})
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	},[])

	return (
		<div>
			<div className='upload_container'>
			  <Form>
			    <Form.Group className="mb-3" controlId="formBasicEmail">
			      <Form.Label><b>Upload Certificate</b></Form.Label>
			      <Form.Control type="file" onChange={(e)=>setFile(e.target.files[0])} />
			    </Form.Group>
			    <Form.Group>
			      <Button onClick={uploadFile} className='material_btn'>Submit</Button>
			    </Form.Group>
			  </Form>
			</div>
			<div className='files'>
				{fileList.map((url)=>{
					return (
					<>
					<object data={url} type="application/pdf" width="200" height="150" key={fileList.indexOf(url)} className='file'>
						<a href={url}>click here</a>
					</object>
					</>)
				})}
			</div>
		</div>
	)
}

export default Certificates