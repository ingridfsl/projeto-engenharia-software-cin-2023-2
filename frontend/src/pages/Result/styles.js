import { TextField, Button, styled } from '@mui/material';

export const StyledTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: 'var(--primary-color, #1976d2)',
        fontSize: '1.1rem',
    },
    '& .MuiInputLabel-root': {
        fontSize: '1rem',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: 'var(--primary-color, #1976d2)',
        },
    },
});

export const CustomButton = styled(Button)({
    backgroundColor: '#0B409C',
    '&:hover': {
        backgroundColor: '#10316B',
    },
    color: 'white',
    borderRadius: '5px',
    textAlign: 'center',
    textTransform: 'none',
    padding: '10px 15px',
    fontSize: '1rem',
});
