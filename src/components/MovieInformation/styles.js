import { styled , Grid , Modal } from '@mui/material';
import { Link } from 'react-router-dom';

export const ContainerSpaceAround = styled(Grid)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-around',
    margin: '10px 0 !important',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        flexWrap: 'wrap'
    }
}));

export const Poster = styled('img')(({theme}) => ({
    borderRadius: '20px',
    boxShadow: '0.5em 1em 1em rgb(64 , 64 ,70)',
    width: '80%',
    [theme.breakpoints.down('md')]: {
        margin: '0 auto',
        width: '50%',
        height: 'auto',
    },
    [theme.breakpoints.down('sm')]: {
        margin: '0 auto',
        width: '100%',
        height: 'auto',
        marginBottom: '30px'
    },
    
}));

export const GenresContainer = styled(Grid)(() => ({
    margin: '10px 0 !important',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap'
}));

export const GenreLink = styled(Link)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    [theme.breakpoints.down('sm')]: {
        padding: '0.5rem 1rem'
    }
}));

export const GenreImage = styled('img')(({ theme }) => ({
    height: '30px',
	filter: theme.palette.mode === 'dark' && 'invert(1)',
    marginRight: '10px',
}));

export const CastImage = styled('img')(() => ({
    width: '100%',
    maxWidth: '7em',
    height: '8em',
    objectFit: 'cover',
    borderRadius: '10px'
}));

//**** Styling of Buttons ****//
export const ButtonsContainer = styled('div')(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    }
}));

export const ButtonsCaption = styled(Grid)(({theme}) => ({
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column'
    }
}));

export const StyledModal = styled(Modal)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}));
    //**** Styling of Trailer ****//
export const StyledIframe = styled('iframe')(({theme}) => ({
    width: '50%',
    height: '50%',
    [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: '90%'
    }
}));