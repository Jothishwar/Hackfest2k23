import React,{ useState } from 'react';
import { Table,Button } from 'react-bootstrap';
import UploadFile from './UploadFile';
import './assignments.css';

function Assignments({isStudent}) {
	// const [fileList, setFileList] = useState([]);
	const [dept] = useState('cse');
	const [modalShow, setModalShow] = useState(false);

	return (
		<div>
			{!isStudent && (
				<>
				<div className='assignment_header'>
				    <h2>Assignments</h2>
				</div>
				<div className='table'>
					<Table striped bordered hover responsive>
						<thead>
							<tr>
								<th>#</th>
								<th>Assignment Title</th>
								<th>Department</th>
								<th>Assignment Link</th>
								<th>Student Submission</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>1</td>
								<td>hello world</td>
								<td>{dept}</td>
								<td> <Button as="input" type="button" value="Choose File" onClick={()=>setModalShow(true)} /> </td>
								<td> <Button variant='primary' >Download</Button> </td>
							</tr>
							<tr>
								<td>2</td>
								<td>hello world</td>
								<td>{dept}</td>
								<td> <Button as="input" type="button" value="Choose File" /> </td>
								<td> <Button variant='primary' >Download</Button> </td>
							</tr>
							<tr>
								<td>3</td>
								<td>hello world</td>
								<td>{dept}</td>
								<td> <Button as="input" type="button" value="Choose File" /> </td>
								<td> <Button variant='primary' >Download</Button> </td>
							</tr>
							<tr>
								<td>4</td>
								<td>hello world</td>
								<td>{dept}</td>
								<td> <Button as="input" type="button" value="Choose File" /> </td>
								<td> <Button variant='primary' >Download</Button> </td>
							</tr>
							<tr>
								<td>5</td>
								<td>hello world</td>
								<td>{dept}</td>
								<td> <Button as="input" type="button" value="Choose File" /> </td>
								<td> <Button variant='primary' >Download</Button> </td>
							</tr>
						</tbody>
					</Table>
				</div>
				<UploadFile 
					show={modalShow}
					onHide={()=>setModalShow(false)}
					dept={dept}
				/>
				</>
			)}
		</div>
	)
}

export default Assignments;