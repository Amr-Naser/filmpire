import { styled , Grid } from '@mui/material';

export const StyledGrid = styled(Grid)(({theme}) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
        justifyContent: 'center'
    }
}));