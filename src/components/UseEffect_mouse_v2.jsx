import React from "react";
import { useState,useEffect } from "react";

function MouseContainer(){
	
	let [X,setX] = useState(0);
	let [Y,setY] = useState(0);

	let [display,setDisplay] = useState(true);

	const logMousePosition = e => {

		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() =>{

		console.log("Mouse event")
		window.addEventListener("mousemove", logMousePosition)
	
		return () => {
			console.log("Mouse event unmounted")
			window.removeEventListener("mousemove", logMousePosition)
		}

	},[])


	return (
		<div className="h-40 w-100 flex items-center justify-center bg-cyan-100">
			<div className="h-40 w-60 flex items-center justify-center">
				<button onClick={() => setDisplay(!display)} 
				className="h-10 w-20 py-2 px-2 bg-red-300 text-white"> Display </button>
				{ display && <div className="h-20 w-30 ml-5 bg-green-200 py-2 px-2">
					Hook X: {X} - Y:{Y}
				</div>
				}
			</div>
		</div>
	)
}

export default MouseContainer;
