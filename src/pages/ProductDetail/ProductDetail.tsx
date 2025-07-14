import { useParams } from "react-router";

import NotFoundImageIcon from "assets/image-not-found.svg";
import { PLU6Barcode } from "components/PLU6Barcode/PLU6Barcode";
import { getProductById } from "../../data/mockData";

import "./ProductDetail.css";

const ProductDetail = () => {
	const { id } = useParams<{ id: string }>();
	const productId = id ? parseInt(id) : null;
	const product = productId ? getProductById(productId) : null;

	if (!product) {
		return (
			<div className="page-content">
				<div className="empty-state">
					<div className="empty-state-title">Товар не найден</div>
					<div className="empty-state-text">Возможно, товар был удален или изменен</div>
				</div>
			</div>
		);
	}

	return (
		<div className="product-detail">
			<div className="product-detail__image">
				{product.image ? <img src={product.image} alt={product.name} /> : <NotFoundImageIcon />}
			</div>
			<div className="product-detail__info">
				<h1 className="product-detail-title">{product.name}</h1>
				<div className="product-detail-code">
					<span className="product-detail-code__plu">{product.plu}</span>
					{product.barcode && (
						<div style={{ width: "232px" }}>
							<PLU6Barcode pluCode={product.barcode} />
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
