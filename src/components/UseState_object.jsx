import React from "react";
import { useState } from "react";

function HookObject(){
	
	let [name , setName] = useState({firstName:'',lastName:''});

	return (
		<>
			<div>
			<div className="bg-green-200 h-full w-full">
				<form>
					<div className="bg-red-100 h-20 w-full content-center align-middle">
						<input type="text" value={name.firstName} onChange={e => setName({...name,firstName:e.target.value})}>
					</input>
					</div>
					<div className="bg-blue-200 h-20 w-full content-center align-middle">
						<input type="text" value={name.lastName} onChange={e => setName({...name,lastName: e.target.value})}>
						</input>
					</div>
				</form>
			</div>
					<div className="bg-orange-200 h-20 w-full">
					{name.firstName}
						</div>
					<div className="bg-green-200 h-20 w-full">
						{name.lastName}
					</div>
		</div>
		</>
	);
}

export default HookObject;
