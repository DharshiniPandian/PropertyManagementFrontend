import {createTheme, responsiveFontSizes} from "@mui/material"
import { blue, purple, red } from "@mui/material/colors";

const theme = createTheme({
    palette: {  //setting color
      primary: {
        main: blue[500],
      },
      secondary: {
        main: red[500],
      },
      success: {
        main: purple[500],
      },
    },
    components: {   //modifying components ui
      MuiButton: {
        styleOverrides: {
          outlinedPrimary: {  //outlinedPrimary  -> css to a specific button, instead to apply css for all buttons use root
            borderRadius: 20,
          },
        },
      },
      MuiFab: {
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...(ownerState.size === "large" && {   //under root to target a specific property element, here size large
              width: 100,
              height: 100,
            }),
          }),
        },
        defaultProps: {
          size: "medium",  // to override default properties of an element
        },
        variants: [
          {
            props: { variant: "square" },  //creating our own variant, default available -> circular(default), extended
            style: {
              borderRadius: 10,
            },
          },
        ],
      },
    },
  });
  
  export default responsiveFontSizes(theme);