'use client';

import { Button as MuiButton } from '@mui/material';
import { styled } from '@mui/material/styles';

const Button = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  padding: '0.5rem 1.5rem',
  borderRadius: '0.5rem',
  fontWeight: 500,
  fontSize: '0.875rem',
  lineHeight: '1.5',
  '&.MuiButton-contained': {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
  },
  '&.Mui-disabled': {
    opacity: 0.7,
    backgroundColor: theme.palette.action.disabledBackground,
  },
}));

export default Button; 