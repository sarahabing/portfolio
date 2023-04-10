import { Card, CardContent, Typography } from '@mui/material'

interface PortfolioCardProps {
  title: string
}


export function PortfolioCard(props: PortfolioCardProps): JSX.Element {
  return (
    <Card variant='outlined' sx={{ bgcolor: 'transparent' }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {props.title}
        </Typography>
        <Typography variant='h5' component='div'>
          be-nev-o-lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          adjective
        </Typography>
        <Typography variant='body2'>
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </Card>
  )
}
