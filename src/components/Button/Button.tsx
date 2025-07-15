import cn from "classnames";
import "./Button.css";

interface IProps extends React.HTMLAttributes<HTMLButtonElement> {
	type?: "primary" | "outline";
	onClick?: () => void;
	size?: "medium" | "large";
	className?: string;
	ref?: React.RefObject<HTMLButtonElement | null>;
}

export const Button: React.FC<React.PropsWithChildren<IProps>> = ({
	type = "outline",
	size = "large",
	onClick,
	children,
	className,
	ref,
	...rest
}) => {
	return (
		<button
			ref={ref}
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
			{...rest}
		>
			{children}
		</button>
	);
};
