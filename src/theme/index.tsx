import { ReactNode, useMemo } from "react";
import {  createTheme, StyledEngineProvider, ThemeOptions, ThemeProvider} from '@mui/material/styles';
import palette from "./palette";
import breakpoints from "./breakpoints";
import typography from "./typography";
// import shadows, { customShadows } from './shadows';
import { CssBaseline } from "@mui/material";

type ThemeConfigProps = {
    children: ReactNode;
  };
  

export default function ThemeConfig({ children }: ThemeConfigProps) {
    const themeCongif = createTheme({
        breakpoints,
        palette,
        typography,
        shape: { borderRadius: 8 },
        components: {
          MuiButton: {
            defaultProps: {
              disableElevation: true
            },
            styleOverrides: {
              root: {
                textTransform: 'none'
              },
              sizeSmall: {
                padding: '6px 16px'
              },
              sizeMedium: {
                padding: '8px 20px'
              },
              sizeLarge: {
                padding: '11px 24px'
              },
              textSizeSmall: {
                padding: '7px 12px'
              },
              textSizeMedium: {
                padding: '9px 16px'
              },
              textSizeLarge: {
                padding: '12px 16px'
              }
            }
          },
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true
            }
          },
          MuiCardContent: {
            styleOverrides: {
              root: {
                padding: '32px 24px',
                '&:last-child': {
                  paddingBottom: '32px'
                }
              }
            }
          },
          MuiCardHeader: {
            defaultProps: {
              titleTypographyProps: {
                variant: 'h6'
              },
              subheaderTypographyProps: {
                variant: 'body2'
              }
            },
            styleOverrides: {
              root: {
                padding: '32px 24px'
              }
            }
          },
          MuiCssBaseline: {
            styleOverrides: {
              '*': {
                boxSizing: 'border-box',
                margin: 0,
                padding: 0
              },
              html: {
                MozOsxFontSmoothing: 'grayscale',
                WebkitFontSmoothing: 'antialiased',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%'
              },
              body: {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                minHeight: '100%',
                width: '100%'
              },
              '#__next': {
                display: 'flex',
                flex: '1 1 auto',
                flexDirection: 'column',
                height: '100%',
                width: '100%'
              }
            }
          },
          MuiOutlinedInput: {
            styleOverrides: {
              notchedOutline: {
                borderColor: '#E6E8F0'
              }
            }
          },
          MuiTableHead: {
            styleOverrides: {
              root: {
                backgroundColor: '#F3F4F6',
                '.MuiTableCell-root': {
                  color: '#374151'
                },
                borderBottom: 'none',
                '& .MuiTableCell-root': {
                  borderBottom: 'none',
                  fontSize: '12px',
                  fontWeight: 600,
                  lineHeight: 1,
                  letterSpacing: 0.5,
                  textTransform: 'uppercase'
                },
                '& .MuiTableCell-paddingCheckbox': {
                  paddingTop: 4,
                  paddingBottom: 4
                }
              }
            }
          }
        },
        shadows: [
          'none',
          '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
          '0px 1px 2px rgba(100, 116, 139, 0.12)',
          '0px 1px 4px rgba(100, 116, 139, 0.12)',
          '0px 1px 5px rgba(100, 116, 139, 0.12)',
          '0px 1px 6px rgba(100, 116, 139, 0.12)',
          '0px 2px 6px rgba(100, 116, 139, 0.12)',
          '0px 3px 6px rgba(100, 116, 139, 0.12)',
          '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
          '0px 5px 12px rgba(100, 116, 139, 0.12)',
          '0px 5px 14px rgba(100, 116, 139, 0.12)',
          '0px 5px 15px rgba(100, 116, 139, 0.12)',
          '0px 6px 15px rgba(100, 116, 139, 0.12)',
          '0px 7px 15px rgba(100, 116, 139, 0.12)',
          '0px 8px 15px rgba(100, 116, 139, 0.12)',
          '0px 9px 15px rgba(100, 116, 139, 0.12)',
          '0px 10px 15px rgba(100, 116, 139, 0.12)',
          '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
          '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
          '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
          '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)',
          '0px 25px 50px rgba(100, 116, 139, 0.25)'
        ],
      });
    const theme = createTheme(themeCongif);
    // Fazer todo o overide dos componentes do material ui
    // theme.components = componentsOverride(theme)
    return (
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </StyledEngineProvider>
      );
}