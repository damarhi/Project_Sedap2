import { useState, useEffect } from "react";
import data from "../../assets/produk.json";

export default function Produk() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div>
        <h2
          className="text-4xl font-bold mb-4 py-3 text-hijau text-center mx-auto"
          data-sal-delay="200"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          Top Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {products.map((produk, index) => (
            <div
              key={index}
              className="relative p-6 rounded-2xl shadow-md bg-white overflow-hidden"
            >
              <img
                src={produk.gambar}
                alt={produk.nama_produk}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {produk.nama_produk}
                </h3>
                <p className="text-lg text-green-600 font-bold mb-2">
                  {produk.harga}
                </p>
                <span className="absolute top-4 right-4 bg-blue-100 text-blue-600 px-3 py-1 text-sm rounded-full font-semibold">
                  Popular
                </span>
              </div>
            </div>
          ))}
        </div>
    </div>
  );
}