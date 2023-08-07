import RocketLogoRegion from "./rocketLogo/RocketLogoRegion";
import PokeballIconRegion from "./pokeballIcon/PokeballIconRegion";
import "./navRegion.css";
import usePokemonQuery from "@/api/query/hooks/usePokemonQuery";
import usePaginationQuery from "@/api/query/hooks/usePaginationQuery";
import usePokedexQuery from "@/api/query/hooks/usePokedexQuery";
import { useQuery } from "@apollo/client";
import query from "@/api/query/query";
import toUSD from "@/currency/toUSD";

function NavRegion() {
	const umbreon = usePokemonQuery("150");
	// const umbreon = usePaginationQuery("20");
	// const umbreon = usePokedexQuery("1");

	// const umbreon = useQuery(query.byId("188"));

	console.log("\n======================== umbreon ========================\n");
	console.log(umbreon?.getName());
	console.log("======================== umbreon ========================\n\n");

	// const dexEntry = usePokedexQuery(umbreon?.getDexNo());

	// umbreon?.setDexEntry(dexEntry ? dexEntry : "");

	return (
		<nav id="nav-region">
			{/* <p>{umbreon?.getDexEntry()}</p>
			<img src={umbreon?.getShinyArtwork()} /> */}
			<p> {toUSD(umbreon?.getPrice())} </p>
			<RocketLogoRegion />
			<PokeballIconRegion />
		</nav>
	);
}

export default NavRegion;
