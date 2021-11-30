import React from "react";

export default function Testi() {
  return (
    <div>
      {" "}
      <section className="container mx-auto pt-24">
        <div className="flex justify-between items-center">
          <div className="w-auto">
            <h2 className="text-3xl text-gray-900 mb-8">
              Lihat Apa Yang Dikatakan
              <br />
              Oleh Klien Kami
            </h2>
          </div>
        </div>
        <div className="flex mb-10">
          <div className="w-2/12 flex justify-center items-start">
            <img src="/assets/images/testimonial-line.svg" alt />
          </div>
          <div className="w-8/12 mt-16">
            <h2 className="text-3xl text-gray-900 font-light">
              “Pendanaan di Berkah sangat mudah dan nyaman. <br />
              Hanya perlu mencari ide, klik dan silahkan mendanai.”
            </h2>
            <div className="testimonial-info mt-8">
              <div className="name text-xl font-semibold">Prudenca Ahmad</div>
              <div className="title text-xl font-light text-gray-400">
                Project Manager
              </div>
            </div>
            <div className="testimonial-icon mt-10">
              <img
                src="/assets/images/profile.png"
                alt
                className="w-20 mr-5 inline-block testimonial-user rounded-full"
              />
              <img
                src="/assets/images/profile.png"
                alt
                className="w-20 mr-5 inline-block testimonial-user rounded-full"
              />
              <img
                src="/assets/images/profile.png"
                alt
                className="w-20 mr-5 inline-block testimonial-user active rounded-full"
              />
            </div>
          </div>
          <div className="w-2/12" />
        </div>
      </section>
    </div>
  );
}
