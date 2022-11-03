import { Box, Container, Typography } from '@mui/material';
import Login from '@Ui/components/Molecule/Login';
import Navbar from '@Ui/components/Molecule/Navbar';
import Table from '@Ui/components/Molecule/Table';
import { SearchContext } from 'context/searchProvider';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

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
