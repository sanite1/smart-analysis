import Box from "@mui/material/Box"
import { Typography, } from "@mui/material";
// import { Fragment, useState } from "react";
// import RelatedWorksData from "../Data/data";
import WorksCards from "../Components/WorksCards";
import { useEffect } from "react";

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

const RelatedWorks = () => {

    // const styles = Styles();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);


    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Here are some related works!
            </Typography>
            <Box>
                <WorksCards />
            </Box>
        </Box>
    );
}
 
export default RelatedWorks;