import { Box, Container, Typography } from '@mui/material';
import Login from '@Ui/components/Molecule/Login';
import Table from '@Ui/components/Molecule/Table';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from '../styles/Home.module.css';
import DashboardLayout from './layout';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <DashboardLayout>
          <Container maxWidth={'xl'}>
            <Typography variant="h1">{id}</Typography>
          </Container>
        </DashboardLayout>
      </main>
    </div>
  );
}