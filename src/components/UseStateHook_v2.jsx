import React from "react";
import { useState } from "react";

function HookCounter(){
	
	let initialval = 0; // this is only for reseting value;
	let [count,setCount] = useState(0);

	const increase = () => {
		setCount(count + 1)
	}

	const decrease = () => {

		setCount(count  - 1)

	}


	

	return (
		<>	
			<div className="h-60 w-full bg-sky-100 content-center">
				{count}
			</div>

			<div className="h-60 w-full bg-red-200 content-center" >
				<button onClick={increase} className="h-20 w-250 text-s text-white bg-red-500 rounded-2xl px-5 py-2.5"> Increament </button>
			</div>

			<div className="h-60 w-full bg-green-500 fle content-center">
				<button onClick={decrease} className="bg-red-500 text-sm rounded-2xl px-5 py-2.5"> Decreament </button>
			</div>

			<div className="h-60 w-full bg-sky-400 content-center">
				<button onClick={() => setCount(initialval)} className="h-20 w-450 bg-red-500 rounded-2xl"> Reset </button>
			</div>

		</>
	);
}

export default HookCounter;
