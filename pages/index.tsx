import { Box, Container } from '@mui/material';
import Login from '@Ui/components/Molecule/Login';
import Table from '@Ui/components/Molecule/Table';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container maxWidth={'xl'}>
          <Box my={5}>
            <Login />
          </Box>
          <Table />
        </Container>
      </main>
    </div>
  );
}
