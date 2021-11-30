import React from "react";
import Header from "../components/Home/Header";
import Footer from "../components/Home/Footer";
import Desc from "../components/Home/Desc";
import Isi from "../components/Home/Isi";
import Testi from "../components/Home/Testi";
import Service from "../components/Home/Service";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="landing-page">
        <section className="landing-hero pt-5 bg-green-400">
          <div className="header__bg " />
          <div className="container mx-auto relative">
            <div className="flex items-center pt-10 px-5 md:px-0">
              <div className="w-1/2">
                <h1 className="text-4xl text-white mb-5">
                  Kami siap membantu orang yang<br></br>
                  <u className="hero-underline"> kurang mampu </u>
                  &amp; <u className="hero-underline">membutuhkan</u> <br />
                  untuk membantu kebutuhan mereka
                </h1>
                <p className="text-white text-xl font-light mb-8">
                  Gunakanlah dana anda untuk <br />
                  membantu yang membutuhkan
                </p>
                <button className="block bg-orange-button hover:bg-green-button text-white font-semibold px-12 py-3 text-xl rounded-full">
                  Temukan Project
                </button>
              </div>
              <div className="w-1/2 flex justify-center">
                <img
                  src="/assets/images/gambar01.png"
                  alt="crowdfunding project"
                />
              </div>
            </div>
          </div>
        </section>
        <Desc />
        <Isi />
        <Testi />
        <div className="cta-clip -mt-20" />
        <Service />
        <Footer />
      </div>
    </div>
  );
}
