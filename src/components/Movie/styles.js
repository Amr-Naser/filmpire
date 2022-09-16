import { styled , Grid , Typography} from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledMovie = styled(Grid)(() => ({
    padding: '10px'
}));

export const TitleTypography = styled(Typography)(({theme}) => ({
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: '230px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: '10px',
    marginBottom: 0,
    textAlign: 'center'
}));

export const MovieLink = styled(Link)(({theme}) => ({
    alignItems: 'center',
    fontWeight: 'bolder',
    textDecoration: 'none',
    [theme.breakpoints.up('xs')] : {
        display: 'flex',
        flexDirection: 'column'
    },
    '&:hover' : {
        cursor: 'pointer'
    }
}));

export const MovieImage = styled('img')(() => ({
    borderRadius: '20px',
    height: '300px',
    marginBottom: '10px',
    transition:'all 0.2s ease-in-out',
    '&:hover' : {
        transform: 'scale(1.05)'
    }
}));