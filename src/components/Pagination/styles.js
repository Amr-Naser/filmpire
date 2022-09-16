import { styled , Button , Typography } from '@mui/material';

export const Container = styled('div')(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center'
}));

export const StyledButton = styled(Button)(() => ({
    margin: '30px 2px'
}));

export const PageNumber = styled(Typography)(({theme}) => ({
    margin: '0 20px !important',
    color:theme.palette.text.primary
}));