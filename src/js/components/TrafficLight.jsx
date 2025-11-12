import React, { useState } from 'react';


export const TrafficLight = () => {

	let [redClicked, SetRedIsClicked] = useState(false);
	let [yellowClicked, SetYellowIsClicked] = useState(false);
	let [greenClicked, SetGreenIsClicked] = useState(false);

	let lightsColorChangeRed = () => {
			SetGreenIsClicked(false);
			SetYellowIsClicked(false); 
			SetRedIsClicked(true);
	}
	
	let lightsColorChangeYellow = () => {
			SetGreenIsClicked(false);
			SetYellowIsClicked(true); 
			SetRedIsClicked(false);
	}
	
	let lightsColorChangeGreen = () => {
			SetGreenIsClicked(true);
			SetYellowIsClicked(false); 
			SetRedIsClicked(false);
	}


	const baseClassRed = "light red"
	const baseClassYellow = "light yellow"
	const baseClassGreen = "light green"

   return (
		<div className="d-flex justify-content-center">
			<div className="d-flex flex-column">
				<div id="pole" className="container"></div>
				<div id="trafficLight" className="rounded-4 justify-content-center">
					<div className="d-flex flex-column w-75">
						<div className={`${baseClassRed} ${redClicked ? 'redActive' : ''}`}
						onClick={lightsColorChangeRed}></div>
						<div className={`${baseClassYellow} ${yellowClicked ? 'yellowActive' : ''}`}
						onClick={lightsColorChangeYellow}></div>
						<div className={`${baseClassGreen} ${greenClicked ? 'greenActive' : ''}`}
						onClick={lightsColorChangeGreen}></div>
					</div>
				</div>
			</div>
		</div>
	);
}

