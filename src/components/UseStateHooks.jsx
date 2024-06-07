import React from "react";
import { useState} from "react";

function HookCounter(){

	let [count,onCount] = useState(0)

	return (
		<div className="width 500px">
			<button onClick={() => onCount(count + 1)}>Count {count}</button>
		</div>
	)

}

export default HookCounter;

