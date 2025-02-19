import { Inter } from 'next/font/google';
import './globals.css';
import { AuthProvider } from '@/providers/auth-provider';
import MUIRegistry from './mui-registry';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Next Auth MUI',
  description: 'A boilerplate for Next.js with MUI and Next Auth',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <MUIRegistry>
          <AuthProvider>{children}</AuthProvider>
        </MUIRegistry>
      </body>
    </html>
  );
}
