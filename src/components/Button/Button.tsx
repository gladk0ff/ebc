import cn from "classnames";
import "./Button.css";

interface IProps {
	type?: "primary" | "outline";
	onClick?: () => void;
	size?: "medium" | "large";
	className?: string;
}

export const Button: React.FC<React.PropsWithChildren<IProps>> = ({
	type = "outline",
	size = "large",
	onClick,
	children,
	className,
}) => {
	return (
		<button
			className={cn(
				"button",
				{
					["button--primary"]: type === "primary",
					["button--outline"]: type === "outline",
					["button--large"]: size === "large",
					["button--medium"]: size === "medium",
				},
				className || ""
			)}
			onClick={onClick}
		>
			{children}
		</button>
	);
};
