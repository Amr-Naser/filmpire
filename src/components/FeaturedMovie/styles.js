import { styled , 
	Box , 
	Card , 
	CardContent , 
	CardMedia 
} from '@mui/material';
	// **** Styling of the Card container ****//
export const Container = styled(Box)(() => ({
	marginBottom: '20px',
	display: 'flex',
	justifyContent: 'center',
	height: '430px',
    paddingLeft: '20px',
	textDecoration: 'none',
}));
	// **** Styling of the Card ****//
export const StyledCard = styled(Card)(() => ({
	width: '100%',
	display: 'flex',
	justifyContent: 'flex-end',
	flexDirection: 'column',
	position: 'relative',
}));
	// **** Styling of the Image ****//
export const StyledCardMedia = styled(CardMedia)(() => ({
	position: 'absolute',
	top: 0,
	right: 0,
	height: '100%',
	width: '100%',
	backgroundColor: 'rgba(0,0,0,0.575)',
	backgroundBlendMode: 'darken',
}));
	// **** Styling of the Card Content ****//
export const StyledCardContent = styled(CardContent)(({ theme }) => ({
	color: '#fff',
	width: '40%',
	[theme.breakpoints.down('sm')]: {
		width: '100%',
	},
	position: 'relative',
	backgroundColor: 'transparent',
}));