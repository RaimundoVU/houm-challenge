
import Grid from '@mui/material/Grid';

const Center: React.FC<{children: React.ReactNode}> = ({children}) => (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: '15vh' }}
    >
      <Grid item xs={3}>
        {children}
      </Grid>   
    </Grid>
)

export default Center;
