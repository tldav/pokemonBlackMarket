"use client";
import { styled as MUIStyled } from "@mui/material/styles";
import MUIBadge from "@mui/material/Badge";
import MUIIconButton from "@mui/material/IconButton";
import MUICatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./pokeballIconRegion.css";

const MUIStyledBadge = MUIStyled(MUIBadge)(({ theme }) => ({
	"& .MuiBadge-badge": {
		right: -3,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
	},
}));

function PokeballIconRegion() {
	return (
		<div>
			<MUIIconButton aria-label="cart-view">
				<MUIStyledBadge badgeContent="0" color="secondary">
					{/*  change badge content to cart items length    */}
					<MUICatchingPokemonIcon fontSize="large" sx={{ color: "white" }} />
				</MUIStyledBadge>
			</MUIIconButton>
			<p>$0.00</p>
		</div>
	);
}

export default PokeballIconRegion;
