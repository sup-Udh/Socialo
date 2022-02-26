import { SessionProvider } from "next-auth/react"
import "tailwindcss/tailwind.css";
import '../styles/globals.css'


export default function App({Component}: {Component:any},pageProps: { session: any, ...pageProps: any[] }) {
}) {
  return (
    // `session` comes from `getServerSideProps` or `getInitialProps`.
    // Avoids flickering/session loading on first load.
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}