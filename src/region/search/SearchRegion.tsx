import { TextField as MUITextField } from "@mui/material";

function SearchRegion() {
	return (
		<div id="search-region">
			<MUITextField
				fullWidth
				type="text"
				placeholder="Enter Pokemon Name"
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
