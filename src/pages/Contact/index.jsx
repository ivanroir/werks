import { useState } from 'react'
import * as React from 'react';
import { Box, CardMedia, Grid } from '@mui/material';
import BusinessCard from '../../components/BusinessCard';
import ContactInformation from '../../components/ContactInformation';


function Home() {
    const [count, setCount] = useState(0)

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex' }} >
                <BusinessCard />
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                <Grid item xs={2} sm={6} md={6}  >
                    <ContactInformation />
                </Grid>
                <Grid item xs={2} sm={6} md={6} >
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                        <Grid item xs={2} sm={6} md={6} sx={{ mt: 1 }}>
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} sx={{ mt: 1 }} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                        <Grid item xs={2} sm={6} md={6} >
                            <Box sx={{ border: '1px solid grey', borderRadius: '50px', width: '100%', height: '200px' }}>

                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Home
