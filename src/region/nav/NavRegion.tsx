import RocketLogoRegion from "./rocketLogo/RocketLogoRegion";
import "./navRegion.css";
import PokeballIconRegion from "./pokeballIcon/PokeballIconRegion";

function NavRegion() {
	return (
		<nav id="nav-region">
			<RocketLogoRegion />
			<PokeballIconRegion />
		</nav>
	);
}

export default NavRegion;
