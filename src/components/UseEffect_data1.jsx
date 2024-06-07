import React from "react";
import { useEffect,useState } from "react";
import axios from "axios";

function FetchData(){
	
	let [data,getData] = useState({});
	let [id,getId] = useState(1);

	useEffect(()=>{

		axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(res =>{
				console.log(res)
				getData(res.data)
			})
			.catch(err => {
				console.log(err)
			})
	},[id])

	return (
		<>
			<div className="bg-pink-100">
				<div className="h-20 w-50 flex items-end justify-center">
					<input value={id} onChange={e => getId(e.target.value)} 
					className="border-2 border-black h-10 w-50 py-2 px-2">
					</input>
				</div>
				<div className="h-10 bg-cyan-200">
					{data.title}
				</div>	
			</div>
		</>
	)
}

export default FetchData;
