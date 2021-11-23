import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TransferirDinero from '../assets/transferirDinero.svg';
import ExtraerDinero from '../assets/extraerDinero.svg';
import CargarDinero from '../assets/cargarDinero.svg';
import HomeTab from '../assets/home.svg';
import MovimientoTab from '../assets/movimientoVerder.svg';
import TarjetaTab from '../assets/tarjeta.svg';
import WalletTab from '../assets/wallet.svg';
import MenuTab from '../assets/menu.svg';

const useStyles = makeStyles((theme) => ({
    pallete:{
      primary: {
        main: "white"
      },
      secondary: {
        main: "#0FD08B"
      }
    },
    root: {
      flexGrow: 1,
    },
    titleStyle: {
      ...theme.typography.title,
      textAlign: 'center',
      color: "#2A1846"
    },
    buttonStyle:{
      textAlign:"center",
      color: "#442E83"
    },
    cardStyle:{
      borderRadius: "8px"
    },
    icon:{
      minHeight:"1.5em",
      minWidth: "1.5em"
    },
    iconMenu:{
      padding:"0",
      margin:"0",
      height:"1.5em",
      width: "1.5em"
    },
    icontext:{
      fontSize:"0.875rem",
      fontWeight: 700,
      lineHeight: "0.9rem"
    },
    subtitle2:{
      ...theme.typography.subtitle1,
      fontWeight: 700
    },
    appBar:{
      top: 'auto',
      bottom: 0,
      width: "21em",
      padding: "0",
      margin: "0"
    },
    tabContainer: {
      width:"1.5em",
      height:"1.5em"
    },
    tabsStyle: {
      "& .PrivateTabIndicator-root-12":{
          bottom: "48px"
        },
        "& .PrivateTabIndicator-root-13":{
          bottom: "48px"
        },
      "& .MuiTab-root": {
        minWidth:"54px",
        minHeight:"54px"
      },
      "& .PrivateTabIndicator-colorPrimary-14": {
          backgroundColor:"#0FD08B"
      }
      
    }
  }));


function InfoCuenta() {  
const [data, setData] = useState([]);
const [cvu, setCvu] = useState([]);
const [movimientos, setMovimientos] = useState([]);
const classes = useStyles();
const [value, setValue] =useState(1);

function handleChange(event,newValue){
  setValue(newValue);
}
function handleData(newValue){
  setData(newValue);
}
const loadData = () => {
  fetch("https://run.mocky.io/v3/d3586928-f1a4-48d2-9a0e-1140bab1e562")
  .then(response => response.json())
  .then(res => {
    handleData(res.result.balance.result.total);
    setCvu(res.result.bankInfo.result.cvu);
    setMovimientos(res.result.activity.result);
    console.log(res.result.activity.result);
  })
  .catch(err => console.error("error!", err))
}
useEffect(() => {
  loadData();
}, []);

return (
    
    <React.Fragment>
      <Grid container direction="column"  alignItems="center" justifyContent="center">
        <Grid item style={{marginTop:"1.25em"}}>{/*-----Titel Block -----*/}
          <Grid container justifyContent="center" direction="row">
              <Grid item className={classes.titleStyle} xs={12}>
              Mi Cuenta
              </Grid>
          </Grid>
        </Grid>
        <Grid item  style={{marginTop:"1.25em", minHeight:"1.53em"}} >{/*-----Saldo Disponible Block -----*/}
          <Grid container 
          alignItems="center" justifyContent="center">
            <Card style={{minWidth:"21em"}} className={classes.cardStyle}>
              <CardContent style={{minheight:"9.56em", marginTop:"1.5em", textAlign: "center"}}>
              <Grid container direction="column">
                <Grid item>
                  <Typography style={{fontSize:"0.75rem"}} variant="h1">
                  SALDO DISPONIBLE
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography style={{fontSize:"2rem"}} variant="h2">
                $ {data}
               
                </Typography>
              </Grid>
              <Grid item>
                <Divider style={{height:"1px", backgroundColor:"#D1D1D7"}} variant="middle" />
              </Grid>
              <Grid item style={{marginTop:"1em"}}>
                <Grid container direction="row" alignItems="center" justifyContent="center">
                  <Grid item>
                    <Grid container direction="row" alignItems="center" justifyContent="center">
                      <Grid item>
                      <Typography variant="subtitle1">
                      CVU:
                      </Typography>
                      </Grid>
                      <Grid item>
                      <Typography variant="subtitle2" className={classes.subtitle2}>
                      
                      {cvu}
                      </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item style={{marginLeft:"1.139em"}}>
                    <Typography variant="subtitle1" style={{color: "#442E83", textAlign: "center"}}>
                        Copiar
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Grid item  style={{marginTop:"1.25em", minHeight:"6em"}}> {/*-----Acciones Dinero Block -----*/}
        <Grid container direction="column"  >
          <Card  className={classes.cardStyle}>
          
            <CardContent style={{minWidth:"21em", minHeight:"6em", padding:"0"}}>
              <Grid container alignContent="space-between"  
              style={{margin:"0", paddingTop: "1.18em", color: "#442E83", textAlign: "center"}}
               direction="row" alignItems="center" justifyContent="center">
                <Grid item style={{padding: 0}}>
                  <Grid style={{ minWidth:"7em"}} container direction="column" 
                  alignItems="center" justifyContent="center">
                    <Grid item>
                      <img className={classes.icon} alt="cargar dinero icon" src={CargarDinero} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h3" className={classes.icontext} >
                      CARGAR <br />DINERO
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                
                 <Divider style={{width:"1px", backgroundColor:"#D1D1D7"}} orientation="vertical" flexItem/>
                <Grid item >
                  <Grid container style={{padding: 0, color: "#442E83", textAlign: "center",minWidth:"7em"}} direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                      <img className={classes.icon} alt="extraer dinero icon" src={ExtraerDinero} />
                    </Grid>
                    <Grid item>
                      <Typography variant="h3" className={classes.icontext} >
                      EXTRAER <br /> DINERO
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider style={{width:"1px", backgroundColor:"#D1D1D7"}} orientation="vertical" flexItem/>
                <Grid item>
                  <Grid container style={{color: "#442E83", textAlign: "center", minWidth:"7em"}} direction="column" alignItems="center" justifyContent="center">
                    <Grid item>
                      <img className={classes.icon} alt="transferir dinero icon" src={TransferirDinero} />
                    </Grid>
                    <Grid item >
                      <Typography variant="h3" className={classes.icontext} >
                      TRANSFERIR<br /> DINERO
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
          </Grid>
      </Grid>
      <Grid item style={{marginTop:"1.25em"}}> {/*-----Movimientos Block -----*/}
      <Grid container  direction="column">
        <Grid item>
        <Grid container direction="row" style={{backgroundColor:"#2A1846", minWidth:"21em"}}>
          <Grid item >
          <Typography variant="h4" 
          style={{color:"white", fontSize:"0.875rem", paddingLeft:"0.75em"}}> MOVIMIENTOS </Typography></Grid>
        </Grid>
        </Grid>
        <Grid item>
          <List style={{margin: "0", padding:"0"}}>
          <ListItem alignItems="center" style={{padding:1}}>
          <Card  style={{width:"100%"}}>
          <CardContent >
          <Grid container direction="row"
            alignItems="center" justifyContent="space-between"
             alignContent="center">
              <Grid item>
                <Typography variant="h5" style={{fontSize:"0.875rem"}}>19-03-20</Typography>
              </Grid>
              <Grid item style={{width:"10.375em"}}>
                <Grid container direction="column" style={{textAlign:"left"}}>
                  <Grid item>
                    <Typography variant="h5" style={{fontSize:"0.875rem", lineHeight: "1.225rem"}}> Transferencia</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" style={{fontSize:"0.875rem", lineHeight: "1.225rem"}}> Aut. 394991</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
              <Typography variant="h5" style={{fontSize:"0.875rem", lineHeight: "1.225rem", color:"#00A067"}}>+ $200,00</Typography>
              </Grid>
            </Grid>
          </CardContent>
              
          </Card>
          </ListItem>
          <ListItem alignItems="center" style={{padding:1}}>
          <Card  style={{width:"100%"}}>
          <CardContent >
          <Grid container direction="row"
            alignItems="center" justifyContent="space-between"
             alignContent="center">
              <Grid item>
                <Typography variant="h5" style={{fontSize:"0.875rem"}}>19-03-20</Typography>
              </Grid>
              <Grid item style={{width:"10.375em"}}>
                <Grid container direction="column" style={{textAlign:"left"}}>
                  <Grid item>
                    <Typography variant="h5" style={{fontSize:"0.875rem", lineHeight: "1.225rem"}}> Pago de servicio</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h5" style={{fontSize:"0.875rem", lineHeight: "1.225rem"}}> Aut. 394991</Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
              <Typography variant="h5" style={{fontSize:"0.875rem", lineHeight: "1.225rem", color:"#F96440"}}>- 4200,00</Typography>
              </Grid>
            </Grid>
          </CardContent>
              
          </Card>
          </ListItem>
          </List>
        </Grid>
      </Grid>
      </Grid>
      <Grid item style={{marginTop:"1.25em"}} >  {/*-----AppBar Block -----*/}
        <AppBar position="static" color="white" className={classes.appBar}>
        <Toolbar className={classes.tabsStyle}>
        <Tabs  variant="centered" value={value} onChange={handleChange}
         className={classes.tabsStyle}  indicatorColor="primary" aria-label="simple menu">
          <Tab disableRipple  className={classes.tabContainer} key="home" 
          icon={<img  alt="home icon" src={HomeTab} className={classes.tabContainer} />}/>
          <Tab disableRipple  className={classes.tabContainer} key="moviemiento"  
          icon={<img   alt="moviemiento icon" src={MovimientoTab} />}/>
          <Tab disableRipple   className={classes.tabContainer} key="tarjeta"
           icon={<img  alt="tarjeta icon" src={TarjetaTab} />}/>
          <Tab disableRipple  className={classes.tabContainer} key="wallet"
           icon={<img  alt="wallet icon" src={WalletTab} />}/>
          <Tab disableRipple   className={classes.tabContainer} key="menu"
           icon={<img  alt="menu icon" src={MenuTab}  />}/>
        </Tabs>
           
        </Toolbar>
      </AppBar>
      </Grid>
     </Grid>
     </React.Fragment>
  );
}

  export default  InfoCuenta ;