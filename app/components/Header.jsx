'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Avatar,
  Menu,
  MenuItem,
  Box,
  Container,
} from '@mui/material';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Home } from '@mui/icons-material';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    handleClose();
    await signOut({ redirect: false });
    router.push('/login');
  };

  const handleProfile = () => {
    handleClose();
    router.push('/dashboard/profile');
  };

  const displayName = session?.user?.email || '';
  const avatarLetter = (displayName[0] || '?').toUpperCase();

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              flexGrow: 1, 
              cursor: 'pointer' 
            }} 
            onClick={() => router.push('/dashboard')}
          >
            <Home sx={{ color: 'primary.main', mr: 2 }} />
          </Box>

          {session?.user && (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography
                variant="body2"
                sx={{ mr: 2, color: 'text.primary' }}
              >
                {displayName}
              </Typography>
              <IconButton
                onClick={handleMenu}
                size="small"
                aria-controls="menu-appbar"
                aria-haspopup="true"
              >
                <Avatar
                  sx={{ 
                    width: 32, 
                    height: 32,
                    bgcolor: 'primary.main',
                  }}
                >
                  {avatarLetter}
                </Avatar>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
} 