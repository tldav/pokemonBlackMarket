import RocketLogoRegion from "./rocketLogo/RocketLogoRegion";
import PokeballIconRegion from "./pokeballIcon/PokeballIconRegion";
import "./navRegion.css";
import usePokemonQuery from "@/api/query/hooks/usePokemonQuery";
import usePaginationQuery from "@/api/query/hooks/usePaginationQuery";
import usePokedexQuery from "@/api/query/hooks/usePokedexQuery";

function NavRegion() {
	const umbreon = usePokemonQuery("212");
	// const umbreon = usePaginationQuery("20");

	console.log("\n======================== umbreon ========================\n");
	console.log(umbreon);
	console.log("======================== umbreon ========================\n\n");

	const dexEntry = usePokedexQuery(umbreon?.getDexNo());

	umbreon?.setDexEntry(dexEntry ? dexEntry : "");

	return (
		<nav id="nav-region">
			<p>{umbreon?.getDexEntry()}</p>
			<img src={umbreon?.getShinyArtwork()} />
			<RocketLogoRegion />
			<PokeballIconRegion />
		</nav>
	);
}

export default NavRegion;
