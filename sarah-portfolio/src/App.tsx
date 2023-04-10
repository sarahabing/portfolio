import {
  AppBar,
  Avatar,
  Box,
  Container,
  Grid,
  IconButton,
  Toolbar,
  Typography
} from '@mui/material'
import './App.css'
import sarah from './assets/logos/sarah.jpg'
import github from './assets/logos/github.png'
import hackerone from './assets/logos/hackerone.png'
import { PortfolioCard } from './assets/components/PortfolioCard'

function App() {
  return (
    <>
      <AppBar component='nav' sx={{ bgcolor: '#0b0d39' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton href='https://github.com/sarahabing' target='_blank'>
            <img className='logo' src={github} />
          </IconButton>
          <IconButton href='https://hackerone.com/devdockter' target='_blank'>
            <img className='logo hackerone' src={hackerone} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Container className='mainContent' maxWidth='sm'>
        <Grid container className='statusBar' spacing={3}>
          <Grid item>
            <Avatar
              alt='Sarah Dockter'
              src={sarah}
              className='sarah'
              sx={{ width: 75, height: 75 }}
            />
          </Grid>
          <Grid item>
            <Typography variant='h1' sx={{ verticalAlign: 'middle' }}>
              Sarah Dockter
            </Typography>
            <span className='emoji'>&#128218; </span>
            <Typography sx={{ verticalAlign: 'super' }} variant='button'>
              Currently studying for Security+
            </Typography>
          </Grid>
        </Grid>

        {/* Main Content */}
        <Box component='main'>
          <Grid className="cardSection" container spacing={3} mt={3}>
            <Grid item xs={12} sm={4}>
              <PortfolioCard title={'Education'} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PortfolioCard title={'Experience'} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <PortfolioCard title={'Experience'} />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  )
}

export default App
