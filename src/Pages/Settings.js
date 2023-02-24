import Box from "@mui/material/Box"
import { Typography, } from "@mui/material";
// import { Fragment, useState } from "react";

import AccountView from "../Components/AccountView";

// const Styles = () => {
//     return {
//         apc: {
//             background: "#d1e9fc"
//         },
//         pdp: {
//             background: "#fff7cd"
//         },
//         lp: {
//             background: "#ffe7d9"
//         },
//     }
// }

const Settings = () => {

    // const styles = Styles();

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Account
            </Typography>
            <Box>
                <AccountView />
            </Box>
        </Box>
    );
}
 
export default Settings;