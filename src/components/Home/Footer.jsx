import React from "react";

export default function Footer() {
  return (
    <div>
      {" "}
      <footer className="bg-green-400 py-20 text-white text-lg">
        <div className="container mx-auto">
          <div className="sm:flex mb-4">
            <div className="sm:w-1/2 sm:mt-0 mt-8 h-auto">
              <img src="/assets/images/logo.png" alt className="mb-3" />
              <p className="font-light">
                Membantu orang yang <br />
                kurang mampu dan membutuhkan
              </p>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="mb-8 font-bold">Jelajahi</div>
              <ul className="font-light">
                <li className="mb-3">Layanan</li>
                <li className="mb-3">Keamanan</li>
                <li className="mb-3">Pengembalian</li>
                <li className="mb-3">Saham</li>
              </ul>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="mb-8 font-bold">Donatur</div>
              <ul className="font-light">
                <li className="mb-3">Akun Saya</li>
                <li className="mb-3">Top Donatur</li>
                <li className="mb-3">Cara Donasi</li>
                <li className="mb-3">Bantuan</li>
              </ul>
            </div>
            <div className="sm:w-1/4 h-auto">
              <div className="mb-8 font-bold">Kantor</div>
              <ul className="font-light">
                <li className="mb-3">+021 2345 2000</li>
                <li className="mb-3">Kb, Sleman, No.12 (Yogyakarta)</li>
                <li className="mb-3">support@berkah.id</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
