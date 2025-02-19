'use client';

import { TextField as MuiTextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const TextField = styled(MuiTextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '0.5rem',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.primary.main,
      },
    },
  },
  '& .MuiInputBase-input': {
    backgroundColor: 'transparent',
    '&:-webkit-autofill': {
      transition: 'background-color 600000s 0s, color 600000s 0s',
    },
    '&[data-autocompleted]': {
      backgroundColor: 'transparent !important',
    },
  },
}));

export default TextField; 