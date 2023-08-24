import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { Link as LinkRouter } from "react-router-dom";

import { Check, Call, ContactMailOutlined, Email, LocationOnOutlined } from '@mui/icons-material';

export default function BusinessCard() {

  const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  return (
    <Card sx={{ display: 'flex', width: '100vw', backgroundColor: '#282826' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: '65%' }}>
        <CardContent sx={{ flex: '1 0 auto', display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column', pl: 1, pb: 1 }}>
            <Avatar alt="" src="https://placehold.co/600x400" sx={{ width: 124, height: 124 }} />
            <LinkRouter to="/"><Button variant="contained" sx={{ m: 1 }}>Producing</Button></LinkRouter>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', pl: 1, pb: 1 }}>
            <Typography component="div" variant="h6" color={'white'}>
              Full Name
            </Typography>
            <Typography component="div" variant="caption" color={'white'}>
              License 1234 {bull} Express 5678
            </Typography>
            <Link
              component="button"
              variant="caption"
              sx={{ textAlign: 'start' }}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              Copy Sponsor Link
            </Link>
            <Typography component="div" variant="caption" color={'white'}>
              JoinReal Email: emailaddress@mail.com | <Link
                component="button"
                variant="caption"
                sx={{ textAlign: 'start' }}
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Agent Website
              </Link>
            </Typography>
            <Typography component="div" variant="caption" color={'white'}>
              Stock Purchase Plan Opted In:
              <Button variant="outlined" size="small" startIcon={<Check />}>
                Yes
              </Button> Shareworks ID: #1689212157
            </Typography>
          </Box>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <LinkRouter to="/contact">
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image="https://placehold.co/600x400"
              alt=""
            />
          </LinkRouter>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flex: '35%' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="body1" color={'white'}>
            Contact Information
          </Typography>
          <Box sx={{ p: 1, border: '1px solid grey', mb: 1 }}>
            <Box sx={{ padding: "4px", display: 'flex' }}>
              <Call sx={{ paddingRight: "4px", color: 'white' }} />
              <Typography component="div" variant="caption" color={'white'}>
                +1 (661) 281-5373
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex' }}>
              <ContactMailOutlined sx={{ paddingRight: "4px", color: 'white' }} />
              <Typography component="div" variant="caption" color={'white'}>
                ak.selkern@gmail.com
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex' }}>
              <Email sx={{ paddingRight: "4px", color: 'white' }} />
              <Typography component="div" variant="caption" color={'white'}>
                ak.selkern@gmail.com
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex' }}>
              <LocationOnOutlined sx={{ paddingRight: "4px", color: 'white' }} />
              <Typography component="div" variant="caption" color={'white'}>
                4900 California Ave #110B, Bakersfield, California 93309
              </Typography>
            </Box>
          </Box>

          <Typography component="div" variant="body1" color={'white'}>
            Transactions
            <Link
              component="button"
              variant="caption"
              sx={{ textAlign: 'start', ml: 1 }}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              See all
            </Link>
          </Typography>
          <Box sx={{ p: 1, border: '1px solid grey', display: 'flex', mb: 1 }}>
            <Box sx={{ padding: "4px", display: 'flex', flexDirection: 'column', paddingRight: 8 }}>
              <Typography component="div" variant="body1" color={'white'}>
                0
              </Typography>
              <Typography component="div" variant="body2" color={'white'}>
                Active
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex', flexDirection: 'column', paddingRight: 8 }}>
              <Typography component="div" variant="body1" color={'white'}>
                0
              </Typography>
              <Typography component="div" variant="body2" color={'white'}>
                Closed
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex', flexDirection: 'column', paddingRight: 8 }}>
              <Typography component="div" variant="body1" color={'white'}>
                0
              </Typography>
              <Typography component="div" variant="body2" color={'white'}>
                Terminated
              </Typography>
            </Box>
          </Box>

          <Typography component="div" variant="body1" color={'white'}>
            Listings
            <Link
              component="button"
              variant="caption"
              sx={{ textAlign: 'start', ml: 1 }}
              onClick={() => {
                console.info("I'm a button.");
              }}
            >
              See all
            </Link>
          </Typography>
          <Box sx={{ p: 1, border: '1px solid grey', display: 'flex' }}>
            <Box sx={{ padding: "4px", display: 'flex', flexDirection: 'column', paddingRight: 8 }}>
              <Typography component="div" variant="body1" color={'white'}>
                0
              </Typography>
              <Typography component="div" variant="body2" color={'white'}>
                Active
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex', flexDirection: 'column', paddingRight: 8 }}>
              <Typography component="div" variant="body1" color={'white'}>
                0
              </Typography>
              <Typography component="div" variant="body2" color={'white'}>
                Closed
              </Typography>
            </Box>
            <Box sx={{ padding: "4px", display: 'flex', flexDirection: 'column', paddingRight: 8 }}>
              <Typography component="div" variant="body1" color={'white'}>
                0
              </Typography>
              <Typography component="div" variant="body2" color={'white'}>
                Terminated
              </Typography>
            </Box>
          </Box>

        </CardContent>
      </Box>
    </Card>
  );
}