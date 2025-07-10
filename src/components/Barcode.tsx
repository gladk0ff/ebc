interface BarcodeProps {
	value: string;
}

const Barcode = ({ value }: BarcodeProps) => {
	const generateBars = (value: string) => {
		const bars = [];
		for (let i = 0; i < value.length; i++) {
			const char = value.charCodeAt(i);
			const width = (char % 3) + 1;
			const isWide = char % 2 === 0;
			bars.push({
				width: isWide ? width * 2 : width,
				height: 48,
			});
		}
		return bars;
	};

	const bars = generateBars(value);

	return (
		<div className="barcode">
			<div className="barcode-bars">
				{bars.map((bar, index) => (
					<div
						key={index}
						className="barcode-bar"
						style={{
							width: `${bar.width * 2}px`,
							height: `${bar.height}px`,
						}}
					/>
				))}
			</div>
		</div>
	);
};

export default Barcode;
