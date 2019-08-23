import React from 'react'
import {Route} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import App from './App.js'
import styles from './admin.module.css'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import {spacing} from '@material-ui/system'

const Login=(props)=>{
  return(
      <Grid container justify='center' >
        <Grid item lg={6} style={{marginTop:'13%',marginLeft:'16%'}}>
          <Paper align='center' justify='center' style={{height:'300px',width:'400px',backgroundColor:'rgba(255,255,255,0.4)',borderRadius:'10%'}}>
            <div class="g-signin2" data-onsuccess="onSignIn" style={{height:'80%',width:'200%',marginRight:'30%'}}></div>
          </Paper>
        </Grid>
      </Grid>
  )
}
export default class Admin extends React.Component{
  constructor(props){
    super(props)
    this.state={
      isAuthenticate:false,
      aunthenticate(){
        this.setState({
          isAuthenticate:true
        })
      },
      signout(){
        this.setState({
          isAuthenticate:false,
        })
      }
    }
  }
    render(){
      return(
        <div style={{backgroundImage:"linear-gradient(rgba(19, 15, 64,0.5),rgba(19, 15, 64,0.5)),url(./bg_pic.jpg)",backgroundSize:'cover',width:'100vw',height:'100vh'}}>
          <Route path="/admin" render={props=>{ return (this.state.isAuthenticate?<App/>:<Redirect to= {{pathname:"/login",state:{from:props.location}}}/>
        )}}/>
      <Route path={""&&"/login"} component={Login}/>
      </div>
      )
    }
  }
