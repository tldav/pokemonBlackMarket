import { TextField as MUITextField } from "@mui/material";
import Button from "../button/Button";
import "./searchRegion.css";

function SearchRegion() {
	return (
		<form id="search-region" className="sizing-queries" action="submit">
			<MUITextField
				id="search-bar"
				fullWidth
				type="text"
				placeholder="Search by name or national pokedex number"
				required
				name="pokemon-search"
				value=""
			/>
			<Button id="search-button" type="submit" styleType="solid">
				{/* Go */}
				<p>Go</p>
			</Button>
		</form>
	);
}

export default SearchRegion;
