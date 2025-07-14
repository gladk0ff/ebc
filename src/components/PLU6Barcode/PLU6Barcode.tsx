import { useEffect } from "react";
import JsBarcode from "jsbarcode";

import "./PLU6Barcode.css";

export const PLU6Barcode = ({ pluCode }: { pluCode: string }) => {
	const id = `plu6-${pluCode || ""}`;
	useEffect(() => {
		JsBarcode("#" + id, pluCode, {
			format: "CODE128",
			displayValue: false,
			margin: 0,
			// width: ,
		});
	}, [pluCode]);

	return <svg id={id} className="plu6-barcode" width="100%" height="100%" />;
};
