import { Box, Typography } from '@mui/material';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import MintButton from '../src/components/MintButton'

const Home: NextPage = () => {
  return (
    <Box sx={{backgroundColor: "#111827"}} className={styles.container}>
      <Head>
        <title>access lists</title>
        <meta
          name="description"
          content="EIP-2929: Gas cost increases for state access opcodes"
        />
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <Typography mt={3} variant="h3" color="white">
          Access Lists 
        </Typography>
        <Typography mb={3} variant="caption" color="white">
          my final experiment with <a href="https://etherscan.io/address/0x4f509FbA9290DBABd0e07Bf78cd01D5c7D6814E9" target="__blank">The Merge Album</a> before full adoption of <a target="__blank" href="https://www.0xsplits.xyz/">0xSplits</a>
        </Typography>

        <MintButton />
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/SweetmanTech/rainbowkit-token-gated" target="_blank" rel="noopener noreferrer"><Typography color="white">Made with ❤️ by sweetman.eth</Typography>  </a> 
      </footer>
    </Box>
  );
};

export default Home;
