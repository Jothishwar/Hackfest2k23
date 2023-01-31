import React from 'react'
import { Button,Modal } from 'react-bootstrap';

function UploadFile(props) {
	
	
	return (
		<Modal
		{...props}
		centered
		>
			<Modal.Header closeButton>
				Upload File
			</Modal.Header>
			<Modal.Body>
				<input type="file" onChange={(e)=>props.setFile(e.target.files[0])} />
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.upload} >Upload</Button>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	)
}

export default UploadFile;