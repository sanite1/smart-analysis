import Box from "@mui/material/Box"
import { Typography,  } from "@mui/material";
import { useEffect, useState } from "react";
import PartyCards from "../Components/PartyCards";
import BarChart from "../Components/BarChart";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


const columns = [
    { id: 'party', label: 'Party', },
    { id: 'positive', label: 'Positve', },
    {
        id: 'negetive',
        label: 'Negetive',
        
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(party, positive, negetive) {
    return { party, positive, negetive };
}

const rows = [    
    createData('Abia State: APC',299.634,130.37),
    createData('Abia State: PDP',281.408,98.365),
    createData('Abia State: LP',316.211,97.784),
    createData('Adamawa State: APC',254.796,157.05),
    createData('Adamawa State: PDP',260.916,106.841),
    createData('Adamawa State: LP',316.929,98.196),
    createData('Akwa Ibom State APC',260.517,136.49),
    createData('Akwa Ibom State PDP',263.989,115.014),
    createData('Akwa Ibom State LP',318.853,92.407),
    createData('Anambra State: APC',255.785,135.971),
    createData('Anambra State: PDP',261.47,120.908),
    createData('Anambra State: LP',318.713,95.013),
    createData('Bauchi State: APC',256.349,143.904),
    createData('Bauchi State: PDP',262.023,109.699),
    createData('Bauchi State: LP',312.427,100.109),
    createData('Bayelsa State: APC',251.168,136.527),
    createData('Bayelsa State: PDP',263.882,114.297),
    createData('Bayelsa State: LP',314.914,95.396),
    createData('Benue State: APC',259.077,144.573),
    createData('Benue State: PDP',260.316,116.028),
    createData('Benue State: LP',309.722,107.198),
    createData('Borno State: APC',272.337,133.632),
    createData('Borno State: PDP',289.999,107.478),
    createData('Borno State: LP',266.948,91.166),
    createData('Cross River State APC',246.564,141.068),
    createData('Cross River State PDP',246.579,140.745),
    createData('Cross River State LP',305.522,109.31),
    createData('Delta State: APC',243.189,145.931),
    createData('Delta State: PDP',248.328,140.276),
    createData('Delta State: LP',307.26,115.292),
    createData('Ebonyi State: APC',238.414,146.625),
    createData('Ebonyi State: PDP',243.272,145.282),
    createData('Ebonyi State: LP',306.884,116.197),
    createData('Edo State: APC',229.593,176.292),
    createData('Edo State: PDP',237.467,149.126),
    createData('Edo State: LP',315.214,123.952),
    createData('Ekiti State: APC',226.146,186.933),
    createData('Ekiti State: PDP',237.892,154.201),
    createData('Ekiti State: LP',312.939,125.831),
    createData('Enugu State: APC',217.879,191.519),
    createData('Enugu State: PDP',231.105,165.136),
    createData('Enugu State: LP',317.755,122.004),
    createData('Gombe State: APC',243.266,168.142),
    createData('Gombe State: PDP',253.805,133.012),
    createData('Gombe State: LP',307.378,106.974),
    createData('Imo State: APC',236.673,179.342),
    createData('Imo State: PDP',229.069,155.768),
    createData('Imo State: LP',316.774,128.582),
    createData('Jigawa State: APC',265.665,146.581),
    createData('Jigawa State: PDP',280.784,111.657),
    createData('Jigawa State: LP',277.343,89.903),
    createData('Kaduna State: APC',232.689,172.063),
    createData('Kaduna State: PDP',249.766,136.308),
    createData('Kaduna State: LP',310.962,107.859),
    createData('Kano State: APC',270.904,144.961),
    createData('Kano State: PDP',281.44,112.427),
    createData('Kano State: LP',277.929,90.223),
    createData('Katsina State: APC',273.129,125.458),
    createData('Katsina State: PDP',285.874,103.749),
    createData('Katsina State: LP',262.072,95.67),
    createData('Kebbi State: APC',268.364,142.247),
    createData('Kebbi State: PDP',273.56,117.287),
    createData('Kebbi State: LP',281.28,88.792),
    createData('Kogi State: APC',266.727,157.213),
    createData('Kogi State: PDP',267.523,140.145),
    createData('Kogi State: LP',303.473,142.746),
    createData('Kwara State: APC',273.964,150.356),
    createData('Kwara State: PDP',270.628,139.15),
    createData('Kwara State: LP',307.099,134.363),
    createData('Lagos State: APC',258.765,162.408),
    createData('Lagos State: PDP',256.014,143.571),
    createData('Lagos State: LP',294.008,131.249),
    createData('Nasarawa State: APC',232.334,175.921),
    createData('Nasarawa State: PDP',251.545,143.478),
    createData('Nasarawa State: LP',307.077,117.494),
    createData('Niger State: APC',244.738,166.461),
    createData('Niger State: PDP',265.578,138.117),
    createData('Niger State: LP',300.913,107.888),
    createData('Ogun State: APC',253.221,149.979),
    createData('Ogun State: PDP',254.844,143.766),
    createData('Ogun State: LP',294.668,119.53),
    createData('Ondo State: APC',244.862,139.527),
    createData('Ondo State: PDP',249.816,144.868),
    createData('Ondo State: LP',295.66,114.947),
    createData('Osun State: APC',252.483,141.249),
    createData('Osun State: PDP',251.303,143.78),
    createData('Osun State: LP',303.845,115.228),
    createData('Oyo State: APC',253.544,134.272),
    createData('Oyo State: PDP',251.807,141.303),
    createData('Oyo State: LP',302.567,111.637),
    createData('Plateau State: APC',243.962,163.041),
    createData('Plateau State: PDP',250.048,142.656),
    createData('Plateau State: LP',307.472,113.973),
    createData('Rivers State: APC',252.522,132.485),
    createData('Rivers State: PDP',245.306,151.076),
    createData('Rivers State: LP',287.994,113.793),
    createData('Sokoto State: APC',270.38,138.359),
    createData('Sokoto State: PDP',269.856,116.585),
    createData('Sokoto State: LP',264.789,98.494),
    createData('Taraba State: APC',231.357,162.123),
    createData('Taraba State: PDP',235.366,156.793),
    createData('Taraba State: LP',309.469,120.555),
    createData('Yobe State: APC',265.972,145.219),
    createData('Yobe State: PDP',264.413,123.665),
    createData('Yobe State: LP',286.044,90.371),
    createData('Zamfara State: APC',261.249,149.372),
    createData('Zamfara State: PDP',256.972,123.726),
    createData('Zamfara State: LP',283.877,89.237),
    createData('Abuja State: APC',349.673,67.199),
    createData('Abuja State: PDP',243.84,122.323),
    createData('Abuja State: LP',292.943,104.91),
];
  


const Styles = () => {
    return {
        chart: {
            background: "#ffffff", 
            padding: "30px",
            boxSizing: "border-box",
            height: "fit-content",
            borderRadius: "12px",
            boxShadow: "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
        },
        piechart: {
            background: "#ffffff", 
            padding: "30px"
        },
        barchart: {
            background: "#ffe7d9"
        },
    }
}

const Dashboard = () => {

    const styles = Styles();
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(3);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [ barData,  ] = useState({
        labels: ["APC", "PDP", "LP"],
        datasets: [{
            label: "Positive",
            data: [9457.890, 9527.802, 11115.925],
            backgroundColor: ["#061b64"],
            
        },
        {
            label: "Negetive",
            data: [5520.865, 4868.605, 4024.276],
            backgroundColor: ["#7a0c2e"],
        },
        ]
    })

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{marginBottom: "30px", fontWeight: "700", fontSize: "36px"}}
            >
                Hi, Welcome back
            </Typography>
            <Box  sx={{marginBottom: "30px", }}>
                <PartyCards />
            </Box>
            <Box>
                <Grid2 container spacing={2} sx={styles.bt} >
                    
                    <Typography
                        variant="h5"
                        sx={{marginBottom: "0px", fontWeight: "700", fontSize: "30px", width: "100%"}}
                    >
                        Overview of all states
                    </Typography>
                    <Grid2 item xs={12} md={12} sx={{padding: {xs: "15px 6px", md: "15px"}}}>
                        <Box sx={[styles.piechart, styles.chart]}>
                            <BarChart chartData={barData} axis={"x"} ratio={2} />
                        </Box>

                    </Grid2>
                </Grid2>
            </Box>
            <Box>
                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                                >
                                {column.label}
                                </TableCell>
                            ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                    const value = row[column.id];
                                    return (
                                        <TableCell key={column.id} align={column.align}>
                                        {column.format && typeof value === 'number'
                                            ? column.format(value)
                                            : value}
                                        </TableCell>
                                    );
                                    })}
                                </TableRow>
                                );
                            })}
                        </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={3}
                        component="div"
                        count={rows.length}
                        rowsPerPage={3}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </Paper>
            </Box>

        </Box>
    );
}
 
export default Dashboard;