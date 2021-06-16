import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import {useHistory} from 'react-router-dom'
import fire from '../firebase'
import {Form} from 'react-bootstrap'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import main from '../images/room-10.jpeg'


import "firebase/auth";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    marginTop:'35px'
  },
  image: {
    backgroundImage: `url(${main})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUpSide() {
 const [email, setEmail] = useState()
 const [pass, setPass] = useState()
 const [num , setNum]= useState()
 const [loc , setLoc]= useState()
 const [pic , setPic]= useState()
 const [gender , setGender]= useState()
 const [fname , setFname]= useState()
 const [lname , setLname]= useState()
 const [cap, setCap] = useState()




  const classes = useStyles();
  let history = useHistory()
  function login(){
      history.push('/login')
  }
  function getEmail(e){
setEmail(e.target.value)
  }
  function getPass(e){
    setPass(e.target.value)
      }
      function getNum(e){
        setNum(e.target.value)
          }
          function getloc(e){
            setLoc(e.target.value)
              }
              function getGender(e){
                setGender(e.target.value)
                  }
                  function getPic(e){
                    setPic(e.target.value)
                      }
                      function frstname(e){
                        setFname(e.target.value)
                          }
                          function lstname(e){
                            setLname(e.target.value)
                              }
                              function getdesc(e){
                                setCap(e.target.value)
                                  }
    

                  const userdata = {
                    fname:fname,
                    lname:lname,
                    loc: loc,
                    pic:pic,
                    email:email,
                    num:num,
                    gender:gender,
                    docKey:email,
                    caption :cap
                }            
      function signUp(e){
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, pass)
        .then((userCredential) => {
          // Signed in 
          alert('Signup Successfull')
          history.push('/login')
          fire.database().ref('users').push(userdata)
        alert('hi')
          var user = userCredential.user;
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // ..
        });
      }

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
            <Form.Label>Upload Your Profile Pic</Form.Label>
            <Form.Control onChange={getPic}  type="file" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={frstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={lstname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={getEmail}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="number"
                label="Contact Number"
                name="number"
                autoComplete="number"
                onChange={getNum}
              />
            </Grid>
          
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="location"
                label="Location"
                name="location"
                autoComplete="location"
                onChange={getloc}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={getPass}
              />
            </Grid>
            <Grid item xs={12}>
            <FormControl className={classes.formControl}>
        <InputLabel htmlFor="age-native-simple">Gender</InputLabel>
        <Select
          native
          onChange={getGender}
          inputProps={{
            name: 'age',
            id: 'age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value='male'>Male</option>
          <option value='20'>Female</option>
      
        </Select>
      </FormControl>
      </Grid>
      <Grid item xs={12}>
      <TextField
          id="outlined-multiline-static"
          label="Add Description About You"
          multiline
          rows={6}
          defaultValue="Default Value"
          variant="outlined"
          onChange={getdesc}
        />
      </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={signUp}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link style={{cursor:'pointer'}} onClick={login} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        </div>
      </Grid>
    </Grid>
  );
}