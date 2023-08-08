import Button from "@/region/button/Button";
import "./landingView.css";

function LandingView() {
	return (
		<div id="landing-view" className="sizing-queries">
			<img id="giovanni" src="image/giovanni_redesign.jpg" alt="Giovanni" />
			<div id="something">
				<img id="rocket-logo" src="/image/favicon.ico" alt="Team Rocket Logo" />
				<Button styleType="hollow">
					<p style={{ width: "100% !important" }}>Shop Black Market</p>
				</Button>
			</div>
		</div>
	);
}

export default LandingView;
