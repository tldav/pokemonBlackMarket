import { TextField as MUITextField } from "@mui/material";

function SearchRegion() {
	return (
		<div id="search-region">
			<MUITextField
				fullWidth
				type="text"
				placeholder="Search by name or national pokedex number"
				required
				name="pokemon-search"
				value=""
				sx={{}}
				style={{ background: "white", borderRadius: "4px" }}
			/>
		</div>
	);
}

export default SearchRegion;
