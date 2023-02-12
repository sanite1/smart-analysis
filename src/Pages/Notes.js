import Box from "@mui/material/Box"
import { Typography, } from "@mui/material";
// import { Fragment, useState } from "react";

import PartyCards from "../Components/PartyCards";

const Styles = () => {
    return {
        apc: {
            background: "#d1e9fc"
        },
        pdp: {
            background: "#fff7cd"
        },
        lp: {
            background: "#ffe7d9"
        },
    }
}

const Notes = () => {

    // const styles = Styles();

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Here are some notes for you.
            </Typography>
            <Box>
                <PartyCards />
            </Box>
        </Box>
    );
}
 
export default Notes;