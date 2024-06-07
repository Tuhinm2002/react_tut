import React from "react";
import { useState,useEffect } from "react";

function HookMouse(){

	let [X,setX] = useState(0);
	let [Y,setY] = useState(0);

	const logMousePosition = e => {
		console.log('Mouse Event')
		setX(e.clientX)
		setY(e.clientY)
	}

	useEffect(() => {
		console.log("Mouse event")
		window.addEventListener("mousemove", logMousePosition)
	},[])

	return (
		<>
			
				<div className="h-40 w-50 align-middle content-center bg-green-200">
					X: {X} - Y: {Y}
				</div>
		</>
	)
}

export default HookMouse;
