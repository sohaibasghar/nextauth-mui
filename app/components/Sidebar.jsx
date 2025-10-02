'use client';

import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  useTheme,
  useMediaQuery,
  Typography,
  Divider,
} from '@mui/material';
import {
  Menu as MenuIcon,
  Home,
  Book,
  Bookmark,
  Settings,
  ChevronLeft,
  Brightness4,
  Brightness7,
  Logout,
} from '@mui/icons-material';
import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import { useTheme as useAppTheme } from '../theme/ThemeProvider';

const DRAWER_WIDTH = 240;

const menuItems = [{ text: 'Dashboard', icon: <Home />, path: '/dashboard' }];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const pathname = usePathname();
  const { isDarkMode, toggleTheme } = useAppTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    router.push(path);
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push('/login');
  };

  const drawerContent = (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: 2,
          borderBottom: 1,
          borderColor: 'divider',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Image
            src="/logo.png"
            alt="Logo"
            width={32}
            height={32}
            style={{ borderRadius: '8px' }}
          />
          <Typography
            variant="h6"
            sx={{
              fontWeight: 600,
              color: 'primary.main',
            }}
          >
            BookShelf
          </Typography>
        </Box>
        {isMobile && (
          <IconButton onClick={handleDrawerToggle} sx={{ ml: 'auto' }} color="primary">
            <ChevronLeft />
          </IconButton>
        )}
      </Box>

      <List sx={{ mt: 2 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              onClick={() => handleNavigation(item.path)}
              selected={pathname === item.path}
              sx={{
                mx: 1,
                borderRadius: 1,
                mb: 0.5,
                '&.Mui-selected': {
                  bgcolor: 'action.selected',
                  '&:hover': {
                    bgcolor: 'action.selected',
                  },
                },
              }}
            >
              <ListItemIcon sx={{ color: pathname === item.path ? 'primary.main' : 'inherit' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: pathname === item.path ? 'primary.main' : 'text.primary',
                    fontWeight: pathname === item.path ? 600 : 400,
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 'auto', mb: 2 }}>
        <Divider sx={{ my: 2 }} />
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={toggleTheme}
              sx={{
                mx: 1,
                borderRadius: 1,
                mb: 0.5,
              }}
            >
              <ListItemIcon>{isDarkMode ? <Brightness7 /> : <Brightness4 />}</ListItemIcon>
              <ListItemText
                primary={isDarkMode ? 'Light Mode' : 'Dark Mode'}
                sx={{
                  '& .MuiListItemText-primary': {
                    color: 'text.primary',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={handleLogout}
              sx={{
                mx: 1,
                borderRadius: 1,
                mb: 0.5,
              }}
            >
              <ListItemIcon>
                <Logout color="error" />
              </ListItemIcon>
              <ListItemText
                primary="Logout"
                sx={{
                  '& .MuiListItemText-primary': {
                    color: 'error.main',
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <IconButton
        color="primary"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{
          position: 'fixed',
          left: 16,
          top: { xs: 8, sm: 12 },
          display: { sm: 'none' },
          zIndex: (theme) => theme.zIndex.appBar + 1,
        }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="nav"
        sx={{
          width: { sm: DRAWER_WIDTH },
          flexShrink: { sm: 0 },
        }}
      >
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              bgcolor: 'background.paper',
              borderRight: 1,
              borderColor: 'divider',
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: DRAWER_WIDTH,
              bgcolor: 'background.paper',
              borderRight: 1,
              borderColor: 'divider',
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>
    </>
  );
}
