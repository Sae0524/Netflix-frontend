import React from 'react'
import { Button, Grid, Paper, TextField, Typography,Link } from '@material-ui/core'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const Login=()=>{
  const paperStyle={padding :20, height: '70vh', width:280, margin:"20px auto"}
  const btnstyle={margin:'8px 0',}
  return(
    <Grid>
      <Paper elevation={10} style={paperStyle}>
      <h2>Sign in</h2>
      <TextField label="Email or phone number" variant="filled" fullWidth required/>
      <TextField label="Password" type="password" variant="filled" fullWidth required/>
      <Button type='submit' color='primary' style={btnstyle} fullWidth >Sign in</Button>
      <FormControlLabel
        control={
          <Checkbox
            
            name="checkedB"
            color="primary"
          />
        }
        label="Remember me"
      />
      <Typography>
      <Link href="#" >Forgot password ?</Link>
      </Typography>
      <Typography> New to Netflix?
      <Link href="#" >Sign up now.</Link>
      </Typography>
      </Paper>
    </Grid>
  )
}

export default Login;