import React from "react";

export default function Service() {
  return (
    <div>
      {" "}
      <section className="call-to-action bg-green-400 pt-64 pb-10">
        <div className="container mx-auto">
          <div className="w-full text-center">
            <h1 className="text-5xl text-white font-semibold">
              Cara mudah untuk membantu
              <br />
              dan berdonasi
            </h1>
            <button className="inline-block bg-orange-button hover:bg-green-button text-white font-semibold px-6 py-4 mt-8 text-lg rounded-full">
              Donasi Sekarang
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
