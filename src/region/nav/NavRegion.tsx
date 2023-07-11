import RocketLogoRegion from "./rocketLogo/RocketLogoRegion";
import PokeballIconRegion from "./pokeballIcon/PokeballIconRegion";
import "./navRegion.css";
import usePokemonQuery from "@/api/usePokemonQuery";
import { useEffect } from "react";

function NavRegion() {
	const charizard = usePokemonQuery("197");

	console.log("\n======================== charizard ========================\n");
	console.log(charizard);
	console.log("======================== charizard ========================\n\n");

	return (
		<nav id="nav-region">
			{/* <p>{charizard}</p> */}
			<RocketLogoRegion />
			<PokeballIconRegion />
		</nav>
	);
}

export default NavRegion;
