import { styled , TextField} from '@mui/material';


export const SearchContainer = styled('div')(({theme}) => ({
    [theme.breakpoints.down('sm')]: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%'
    }
}));

export const SearchInput = styled(TextField)(({theme}) => ({
    color: theme.palette.mode === 'light' && 'black',
    filter: theme.palette.mode === 'light' && 'invert(1)',
    [theme.breakpoints.down('sm')]: {
        marginTop: '-10px',
        marginBottom: '10px'
    }
}));
