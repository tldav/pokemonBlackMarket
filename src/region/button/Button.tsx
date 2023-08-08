"use client";

import { styled } from "@mui/material/styles";
import MUIButton from "@mui/material/Button";

const solid = {
	background: "#990000",
	fontWeight: "bold",
	border: "2px solid",
	borderColor: "#990000",
	fontSize: "14px",
	"&:hover": {
		border: "2px solid",
		borderColor: "#64539b",
		background: "#64539b",
	},
};

const hollow = {
	color: "#990000",
	fontWeight: "bold",
	border: "2px solid",
	padding: "4px 10px",
	fontSize: "14px",
	"&:hover": {
		border: "2px solid",
		borderColor: "#64539b",
		color: "#64539b",
	},
};

const Button = (props: any) => {
	const styleSelector = props.styleType === "solid" ? solid : hollow;
	const variantSelector = props.styleType === "solid" ? "contained" : "outlined";
	const StyledButton = styled(MUIButton)(styleSelector);

	return (
		<StyledButton
			name={props.name}
			color="secondary"
			size="small"
			variant={variantSelector}
			onClick={props.handleClick}
			type={props.type}
		>
			{props.children}
		</StyledButton>
	);
};

export default Button;
