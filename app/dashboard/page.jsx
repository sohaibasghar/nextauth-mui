'use client';

import { useSession } from 'next-auth/react';
import { Container, Typography } from '@mui/material';

export default function Dashboard() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return (
      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>Loading...</Typography>
      </Container>
    );
  }

  if (!session) {
    return (
      <Container
        maxWidth="sm"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography>Please sign in to view this page.</Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 600,
          textAlign: 'center',
          fontSize: { xs: '2rem', sm: '3rem' }, // Responsive font size
        }}
      >
        Hey, Welcome, {session?.user.firstName}!
      </Typography>
    </Container>
  );
}
