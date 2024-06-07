import React from "react";
import { useState } from "react";

function HookArray(){
	
	let [items , setItems] = useState([]);

	function addItems(){

		setItems([...items,{
			id : items.length,
			value : Math.floor(Math.random()*10) + 1
		}])
	}

	return (
		<>
			<div className="h-lvh w-full bg-orange-100">

				<div className="h-20 w-full content-center align-middle">
					<button onClick={addItems} 
					className="h-10 w-50 text-white px-1 bg-green-200 rounded-md">
					Add Items</button>
				</div>

				<div>
					<ul className="list-disc">
						{ items.map(item => (
							<li key={item.id}>{item.value}</li>
						))}
					</ul>
				</div>

			</div>
		</>
	);
}

export default HookArray;
