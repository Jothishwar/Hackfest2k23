import React,{ useEffect } from 'react'
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import {storage} from '../../firebase';

function Files({fileList, setFileList,dept }) {
	const fileListRef = ref(storage,`${dept}/materials/`)

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
			{fileList.map((url)=>{
				return (
				<>
				<object data={url} type="application/pdf" width="200" height="150" key={fileList.indexOf(url)} className='file'>
					<a href={url}>click here</a>
				</object>
				</>
				)
			})}
		</div>
	)
}

export default Files;