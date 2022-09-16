import { styled } from '@mui/material';

export const Image = styled('img')(() => ({
    maxWidth: '90%',
    borderRadius: '20px',
    objectFit: 'cover',
    boxShadow: '0.5em 0.5em 1em'
}));