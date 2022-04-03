import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
}));

function Header() {
  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#FFF",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
    HEADER
    </ThemeProvider>
  );
}

export default Header;
