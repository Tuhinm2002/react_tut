import React from "react"; 
import { useState,useEffect } from "react"; 

function HookInterval(){

	let [count,setCount] = useState(0)

	const tick = () => {
		setCount(count + 1);
	}
	
	useEffect(() => {
		
		const interval = setInterval(tick,1000)

		return () => {
			clearInterval(interval)
		}
	
	},[count])

	return (
	<>
		<div className="h-40 w-full flex justify-center content-start">
		<div className="h-20 w-20 bg-cyan-200 flex items-center justify-center">
			{count}
		</div>
		</div>
	</>
	)
}

export default HookInterval;
