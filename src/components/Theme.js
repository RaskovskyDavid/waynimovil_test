import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  palette:{
    common:{
      green: "#0FD08B"
    },
    primary:{
      main: "#0FD08B"
    }
  },
    typography:{
        title: {
            fontFamily: "Manrope",
            weight: 700,
            size: "1.125rem",
            lineHeight: "1.35rem"
           
        },
        h1:{
          fontFamily:"Manrope",
          fontWeight: 700,
          fontSize:"0.75rem",
          color: "#2A1846",
          lineHeight: "0.9rem"
        },
        h2:{
            fontFamily:"Manrope",
            fontWeight: 700,
            fontSize:"2rem",
            color: "#2A1846",
            lineHeight: "2.2rem"
          },
          h3:{
            fontFamily:"Manrope",
            fontSize:"0.875rem",
            lineHeight: "1.225rem",
            fontWeight: 700,
            lineHeight: "0.9rem"
          },
          h4:{
            fontFamily:"Manrope",
            fontSize:"0.875rem",
            lineHeight: "1.225rem",
            fontWeight: 700,
            lineHeight: "0.9rem"
          },
          h5:{
            fontFamily:"Manrope",
            fontSize:"0.875rem",
            lineHeight: "1.225rem",
            fontWeight: 500,
            lineHeight: "0.9rem"
          },
          subtitle1:{
            fontFamily:"Manrope",
            fontWeight: 500,
            fontSize:"0.875rem",
            lineHeight: "1.225rem"
          },
          subtitle2:{
            ...subtitle1,
            fontWeight: 700
          }
          
    }
});

export default theme;