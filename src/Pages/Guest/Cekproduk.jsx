import React, { useState } from 'react';
import produkData from '../../assets/produk.json';
import About from "./About";
import Produk from "./Produk";
import Ulasan from "./Ulasan";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaExclamationTriangle
} from 'react-icons/fa';

export default function Cekproduk() {
  const [input, setInput] = useState('');
  const [message, setMessage] = useState('');
  const [produk, setProduk] = useState(null);
  const [status, setStatus] = useState(''); // 'available', 'empty', 'notfound'

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input || input.length < 3) {
      setMessage('❌ Input minimal 3 karakter.');
      setProduk(null);
      setStatus('notfound');
      return;
    }

    const keyword = input.trim().toLowerCase();

    const ditemukan = produkData.find(
      (item) =>
        item.kode_produk.toLowerCase() === keyword ||
        item.nama_produk.toLowerCase() === keyword
    );

    if (ditemukan) {
      setProduk(ditemukan);
      if (ditemukan.stok > 0) {
        setStatus('available');
        setMessage(
          `✅ Produk ${ditemukan.nama_produk} tersedia dengan harga ${ditemukan.harga}. Stok tersedia: ${ditemukan.stok}`
        );
      } else {
        setStatus('empty');
        setMessage(`⚠️ Produk ${ditemukan.nama_produk} saat ini sedang habis.`);
      }
    } else {
      setProduk(null);
      setStatus('notfound');
      setMessage('❌ Produk tidak ditemukan. Periksa kembali kode atau nama produk.');
    }
  };

  return (
    <div>

   
    <div className="container p-8 max-w-xl mx-auto mt-12 bg-white shadow-lg rounded-lg h-120">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Cek Ketersediaan Produk
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="produkInput" className="block text-gray-700 font-medium">
            Masukkan Kode atau Nama Produk:
          </label>
          <input
            type="text"
            id="produkInput"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Contoh: k002 atau Ayam Bakar"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-hijau text-white p-4 rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300"
        >
          Cek Produk
        </button>
      </form>

      {message && (
        <div
          className={`mt-6 p-4 rounded-lg text-center transition-all duration-300 
          ${
            status === 'available'
              ? 'bg-green-100 text-green-800'
              : status === 'empty'
              ? 'bg-yellow-100 text-yellow-800'
              : 'bg-red-100 text-red-800'
          }`}
        >
          <div className="flex flex-col items-center space-y-3">
            {status === 'available' && (
              <>
                <FaCheckCircle className="text-4xl" />
                <img
                  src={produk.gambar}
                  alt={produk.nama_produk}
                  className="w-24 h-24 object-cover rounded-md"
                />
              </>
            )}
            {status === 'empty' && (
              <>
                <FaExclamationTriangle className="text-4xl" />
                <img
                  src="https://cdn-icons-png.flaticon.com/512/7486/7486740.png"
                  alt="Out of stock"
                  className="w-20 h-20"
                />
              </>
            )}
            {status === 'notfound' && (
              <FaTimesCircle className="text-4xl" />
            )}
            <p className="text-lg font-medium">{message}</p>
          </div>
        </div>
      )}

       
    </div >
        <div className="pt-20 bg-gray-100 p-4 ">
        <section id="About" className="scroll-mt-20"> <About /></section>
            <section id="Produk" className="scroll-mt-20">  <Produk/></section>
            <Ulasan/>
        </div>
        
    </div>
   
  );
}
