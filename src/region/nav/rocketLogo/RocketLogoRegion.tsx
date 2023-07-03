import Link from "next/link";
import "./rocketLogoRegion.css";

function RocketLogoRegion() {
	return (
		<Link href="/">
			<img id="logo" src="/favicon.ico" alt="Team Rocket Logo" />
		</Link>
	);
}

export default RocketLogoRegion;
