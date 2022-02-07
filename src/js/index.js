//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

function SimpleCouter(props) {
	return (
		<div className="bigCounter">
			<div className="calendar">
				<i className="far fa-clock"></i>
			</div>
			<div className="four"> {props.digitFour} </div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}
SimpleCouter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};
let Couter = 0;
setInterval(function () {
	const Four = Math.floor(Couter / 1000);
	const Three = Math.floor(Couter / 100);
	const Two = Math.floor(Couter / 10);
	const One = Math.floor(Couter / 1);
	console.log(Four, Three, Two, One);
	Couter++;
	ReactDOM.render(
		<SimpleCouter
			digitOne={One}
			digitTwo={Two}
			digitThree={Three}
			digitFour={Four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
