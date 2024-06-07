import React from "react";
import { useState,useEffect } from "react";

function EffectHook(){

	let [count,setCount] = useState(0);
    
	useEffect(() => {

		document.title = `You clicked ${count} times`
	})

	return (
		<>
			<div className="h-40 w-full content-center align-middle">
				<button onClick={() => setCount(count + 1)} className="h-20 w-200 text-white px-2 py-2 bg-blue-200"> 
				Count {count}</button>
			</div>
		</>
	)
}

export default EffectHook;
