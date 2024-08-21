import { ThemeProvider, createTheme } from '@mui/material';
import AppRoutes from './app-route';

const AppTheme = createTheme({
    palette: {
        primary: {
            main: '#ff4400'
        },
        secondary: {
            main: '#f44336'
        }
    }
});
const App = () => {
    return (
        <ThemeProvider theme={AppTheme}>
            <AppRoutes />
        </ThemeProvider>
    );
};

export default App;
