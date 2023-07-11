import RocketLogoRegion from "./rocketLogo/RocketLogoRegion";
import PokeballIconRegion from "./pokeballIcon/PokeballIconRegion";
import "./navRegion.css";
import usePokemonQuery from "@/api/usePokemonQuery";
import { useEffect } from "react";
import usePaginationQuery from "@/api/usePaginationQuery";

function NavRegion() {
	// const umbreon = usePokemonQuery("196");
	const umbreon = usePaginationQuery("20");

	console.log("\n======================== umbreon ========================\n");
	console.log(umbreon);
	console.log("======================== umbreon ========================\n\n");

	return (
		<nav id="nav-region">
			<RocketLogoRegion />
			<PokeballIconRegion />
		</nav>
	);
}

export default NavRegion;
