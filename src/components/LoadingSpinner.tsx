interface LoadingSpinnerProps {
	message?: string;
}

const LoadingSpinner = ({ message = "Загрузка..." }: LoadingSpinnerProps) => {
	return (
		<div className="loading">
			<div className="loading-spinner"></div>
			<div className="loading-text">{message}</div>
		</div>
	);
};

export default LoadingSpinner;
