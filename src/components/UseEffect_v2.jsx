import React from "react";
import { useState,useEffect } from "react";

function ConditionalEffect(){

	let [count,setCount] = useState(0);
	let [name,setName] = useState('');

	useEffect(() =>{
		console.log("The value has been changed")
		document.title = `The count is ${count} `

	},[count]) // Here the original effect changes when count changes "conditionally"


	return (
		<>
			<div className="h-50">
			<div className="h-10 w-100 content-center align-middle bg-blue-100">
				<button onClick={() => setCount(count + 1)} className="h-10 w-100 py-2 px-2 bg-green-100">
				Count {count}
				</button>
			</div>
			<div className="h-20 w-100 content-center align-middle bg-pink-200">
				<input value={name} onChange={e => setName(e.target.value)} type="text" 
				className="h-20 w-100 py-2 px-2 border-black-300"></input>
			</div>
				<div className="h-20 w-100 content-center align-middle bg-orange-100">
					{name}
				</div>
			</div>
		</>
	)
}

export default ConditionalEffect;
