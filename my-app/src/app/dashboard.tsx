import Image from "next/image";
import LineChartSection from "./lineChartSection";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import AppBar from '@mui/material/AppBar';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

export default function Dashboard() {
  return (
    <>
      <Box sx={{ backgroundColor: '#f6f8fa' }}>
        <AppBar position="sticky" sx={{ backgroundColor: "#07284a", marginBottom: '50px', padding: '20px'}}>
          <Image
            src="/stackline_logo.svg"
            alt="Logo"
            width={60}
            height={60}
          />
        </AppBar>
        <Grid container sx={{ flexGrow: 1, margin: '20px' }} spacing={2}>
          <Grid size={2}>
            <Paper sx={{ padding: '20px', height: '700px' }}>
              <Typography>
                Advertisement
              </Typography>
            </Paper>
          </Grid>
          <Grid container size={10}>
            <Grid size={12}>
              <Paper sx={{ padding: '20px' }}>
                <Typography mb='20px'>
                  Retail and Wholesale Sales
                </Typography>
                <LineChartSection/>
              </Paper>
            </Grid>
            <Grid size={12}> 
              <Paper sx={{ marginTop: '20px', marginBottom: '20px',  padding: '20px', height: '300px' }}>
                <Typography>
                  Table
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
