import Link from "next/link";
import "./logoRegion.css";

function LogoRegion() {
	return (
		<Link href="/">
			<img id="logo" src="/favicon.ico" alt="Team Rocket Logo" />
		</Link>
	);
}

export default LogoRegion;
