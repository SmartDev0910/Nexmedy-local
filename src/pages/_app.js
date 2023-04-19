import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import "@/assets/scss/common.scss";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}
