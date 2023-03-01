import GlobalLayout from "@/layout/GlobalLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import {RecoilRoot} from "recoil"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalLayout>
        <Component {...pageProps} />
      </GlobalLayout>
    </RecoilRoot>
  );
}
