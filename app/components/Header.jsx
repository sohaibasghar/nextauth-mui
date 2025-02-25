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
import { Home } from '@mui/icons-material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../theme/ThemeProvider';

export default function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();
  const { isDarkMode, toggleTheme } = useTheme();

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
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
        height: { xs: 56, sm: 64 },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: 56, sm: 64 },
            height: { xs: 56, sm: 64 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              flexGrow: 1,
              cursor: 'pointer',
            }}
            onClick={() => router.push('/dashboard')}
          >
            <IconButton edge="start" color="primary" sx={{ p: 0, mr: 2 }}>
              <Home />
            </IconButton>
          </Box>

          {session?.user && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.primary',
                  display: { xs: 'none', sm: 'block' },
                }}
              >
                {displayName}
              </Typography>
              <IconButton
                onClick={handleMenu}
                size="small"
                sx={{
                  ml: 1,
                  color: 'primary.main',
                }}
              >
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: 'primary.main',
                    color: 'primary.contrastText',
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
                PaperProps={{
                  elevation: 0,
                  sx: {
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    mt: 1,
                    border: 1,
                    borderColor: 'divider',
                  },
                }}
              >
                <MenuItem
                  onClick={handleProfile}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={handleLogout}
                  sx={{
                    color: 'text.primary',
                    '&:hover': {
                      bgcolor: 'action.hover',
                    },
                  }}
                >
                  Logout
                </MenuItem>
              </Menu>
            </Box>
          )}
          <IconButton
            onClick={toggleTheme}
            size="small"
            sx={{
              ml: 1,
              color: 'primary.main',
              '&:hover': {
                bgcolor: 'action.hover',
              },
            }}
          >
            {isDarkMode ? (
              <Brightness7Icon sx={{ color: 'primary.main' }} />
            ) : (
              <Brightness4Icon sx={{ color: 'primary.main' }} />
            )}
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
