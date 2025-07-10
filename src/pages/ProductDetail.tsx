import { useParams } from "react-router";
import Header from "../components/Header/Header";
import Barcode from "../components/Barcode";
import { getProductById } from "../data/mockData";

const ProductDetail = () => {
	const { id } = useParams<{ id: string }>();
	const productId = id ? parseInt(id) : null;
	const product = productId ? getProductById(productId) : null;

	if (!product) {
		return (
			<div>
				<Header title="Товар не найден" showBack={true} />
				<div className="page-content">
					<div className="empty-state">
						<div className="empty-state-icon">❌</div>
						<div className="empty-state-title">Товар не найден</div>
						<div className="empty-state-text">Возможно, товар был удален или изменен</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div>
			<Header title={product.name} showBack={true} />
			<div className="page-content">
				<div className="product-detail">
					<div className="product-detail-content">
						<div className="product-detail-image">
							{product.image ? <img src={product.image} alt={product.name} /> : <div>📦</div>}
						</div>
						<div className="product-detail-info">
							<h1 className="product-detail-title">{product.name}</h1>
							<div className="product-plu">{product.plu}</div>
							{product.barcode && <Barcode value={product.barcode} />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
