import {
  AppBar,
  Avatar,
  Box,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import './App.css'
import sarah from './assets/logos/sarah.jpg'
import github from './assets/logos/github.png'
import hackerone from './assets/logos/hackerone.png'

function App() {
  return (
    <>
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Avatar
            alt='Sarah Dockter'
            src={sarah}
            sx={{ width: 50, height: 50 }}
          />
        </Grid>
        <Grid item xs={10}>
          <Typography variant='h1'>Sarah Dockter</Typography>
          <span className='emoji'>&#128218; </span>
          <Typography sx={{verticalAlign: 'super'}}variant='button'>
            Currently studying for Security+
          </Typography>
        </Grid>
        <AppBar component='nav' sx={{ bgcolor: 'transparent' }}>
          <Toolbar sx={{ justifyContent: 'flex-end' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <IconButton href='https://github.com/sarahabing' target='_blank'>
                <img className='logo' src={github} />
              </IconButton>
              <IconButton
                href='https://hackerone.com/devdockter'
                target='_blank'
              >
                <img className='logo hackerone' src={hackerone} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Grid>

      <Grid container mt={3} mr={10} px={3}>
        <Grid item xs={12}>
          <Box component='main'></Box>
        </Grid>
      </Grid>
    </>
  )
}

export default App
