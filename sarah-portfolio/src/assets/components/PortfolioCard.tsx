import { Card, CardContent, Typography } from '@mui/material'

interface PortfolioCardProps {
  title: string
}

export function PortfolioCard(props: PortfolioCardProps): JSX.Element {
  return (
    <Card variant='outlined' sx={{ bgcolor: 'transparent', width: '100%' }}>
      <CardContent>
        <Typography variant='h3' color='text.secondary' gutterBottom>
          {props.title}
        </Typography>
        {(() => {
          switch (props.title) {
            case 'Education':
              return (
                <>
                  <Typography variant='h5'>Southern Utah University</Typography>
                  <Typography variant='button'>Master's Degree in Cybersecurity</Typography>
                </>
              )
            case 'Experience':
              return <Typography>work</Typography>
            default:
              return <Typography>uh</Typography>
          }
        })()}
      </CardContent>
    </Card>
  )
}
