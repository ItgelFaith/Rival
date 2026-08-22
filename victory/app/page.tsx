import Image from "next/image";
import Body from "@/components/Body";
import Banners from "@/components/Banners";
import Head from "@/components/Head";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Head />
      <Body />
      <Banners />
      <Footer />
    </div>
  );
}
