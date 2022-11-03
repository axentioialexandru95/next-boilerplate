import { Container } from '@mui/material';
import Navbar from '@Ui/components/Molecule/Navbar';
import Head from 'next/head';

export default function DashboardLayout({ children }: any) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />

        <Container maxWidth={'xl'}>
          {children}
        </Container>

      </main>
    </div>
  );
}
