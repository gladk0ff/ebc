import SpinerIcon from "assets/spiner.svg";

import "./Spinner.css";

interface LoadingSpinnerProps {
	message?: string;
}

const LoadingSpinner = ({ message = "Загрузка..." }: LoadingSpinnerProps) => {
	return (
		<div className="spin-container">
			<div className="spin">
				<SpinerIcon />
			</div>
			<div className="spin-text">{message}</div>
		</div>
	);
};

export default LoadingSpinner;
