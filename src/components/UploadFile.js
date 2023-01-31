import React,{ useState } from 'react'
import { Button,Modal } from 'react-bootstrap';
import {storage} from '../firebase';
import {ref, uploadBytes, getDownloadURL} from 'firebase/storage';

function UploadFile(props) {
	const [file, setFile] = useState(null);

	const uploadAssignment = () =>{
	  if(file == null) return;
	  const fileRef = ref(storage,`${props.dept}/materials/assignment_questions/${file.name}`);
	  uploadBytes(fileRef,file).then(()=>{
	  	props.onHide();
	    alert("file uploaded");
	  });
	};
	
	return (
		<Modal
		{...props}
		centered
		>
			<Modal.Header closeButton>
				Upload File
			</Modal.Header>
			<Modal.Body>
				<input type="file" onChange={(e)=>setFile(e.target.files[0])} />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={uploadAssignment} >Upload</Button>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default UploadFile;