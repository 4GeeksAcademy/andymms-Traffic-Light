import React, { useEffect, useState } from 'react';


export const TrafficLight = () => {

	let [currentLight, setCurrentLight] = useState("");
	let [autoCycling, setAutoCycling] = useState(false);
	let [purpleLight, setPurpleLight] = useState(false);

	let lightsColorChangeRed = () => {
		setAutoCycling(false);
		setCurrentLight("redActive");
	};

	let lightsColorChangeYellow = () => {
		setAutoCycling(false);
		setCurrentLight("yellowActive");
	};

	let lightsColorChangeGreen = () => {
		setAutoCycling(false);
		setCurrentLight("greenActive");
	};

	let lightsColorChangePurple = () => {
		setAutoCycling(false);
		setCurrentLight("purpleActive");
	};


	const autoCycle = () => {
		setAutoCycling(true);
		setCurrentLight("redActive");
	};

	useEffect(() => {

		if (!autoCycling || !currentLight) {
			return;
		}

		let nextLight = "";

		switch (currentLight) {
			case "redActive":
				nextLight = "yellowActive";
				break;
			case "yellowActive":
				nextLight = "greenActive";
				break;
			case "greenActive":
				if (purpleLight) {
					nextLight = "purpleActive";
				} else {
					nextLight = "redActive";
				}
				break;
			case "purpleActive":
				nextLight = "redActive";
		}

		const timer = setTimeout(() => {
			setCurrentLight(nextLight)
		}, 2000);

		return () => clearTimeout(timer);


	}, [currentLight, autoCycling]);

	let handlePurpleLight = () => {
		setPurpleLight(true);
	}

	let handleClosePurpleLight = () => {
		setPurpleLight(false);
	}

	const baseClassRed = "light red"
	const baseClassYellow = "light yellow"
	const baseClassGreen = "light green"
	const baseClassPurple = "lightPurple purple"

	return (
		<div className="d-flex justify-content-center">
			<div className="d-flex flex-column">
				<div className="pole container"></div>
				<div className="trafficLight rounded-4 justify-content-center">
					<div className="d-flex flex-column w-75">
						<div className={`${baseClassRed} ${currentLight == "redActive" ? 'redActive' : ''}`}
							onClick={lightsColorChangeRed}></div>
						<div className={`${baseClassYellow} ${currentLight == "yellowActive" ? 'yellowActive' : ''}`}
							onClick={lightsColorChangeYellow}></div>
						<div className={`${baseClassGreen} ${currentLight == "greenActive" ? 'greenActive' : ''}`}
							onClick={lightsColorChangeGreen}></div>
					</div>
				</div>
				{purpleLight && (
					<>
						<div className="pole container"></div>
						<div className="trafficLightPurple rounded-4 justify-content-center container">
							<div className={`${baseClassPurple} ${currentLight == "purpleActive" ? 'purpleActive' : ''}`}
								onClick={lightsColorChangePurple}></div>
						</div>
						<button className='btn btn-danger mt-3' onClick={handleClosePurpleLight}>Remove</button>
					</>
				)}
				<button className='btn btn-success mt-3' onClick={handlePurpleLight}>Add a new color!</button>
				<button className='btn btn-success my-3' onClick={autoCycle}>Auto cycle</button>
			</div>
		</div>
	);
}

