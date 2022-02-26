import { SessionProvider } from "next-auth/react"
import "tailwindcss/tailwind.css";
import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
} 