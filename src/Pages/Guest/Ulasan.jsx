import { useState, useEffect } from "react";
import dataulasan from "../../assets/ulasan.json";

export default function Ulasan() {
  const [ulasan, setulasan] = useState([]);

  useEffect(() => {
    setulasan(dataulasan);
  }, []);
  return (
    <div>
         <h2
          className="text-4xl font-bold mb-4 py-3 text-hijau text-center mx-auto"
          data-sal-delay="200"
          data-sal="slide-up"
          data-sal-duration="800"
        >
          What Our Happy Customer Say!
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {ulasan.map((ulasan, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-4 rounded-2xl shadow-lg bg-white text-center border border-gray-200 w-72 h-auto"
            >
              <img
                src={ulasan.avatar}
                alt={ulasan.nama}
                className="w-16 h-16 rounded-full mb-3 border-4 border-gray-200"
              />
              <h3 className="text-base font-semibold text-gray-800 mb-1">
                {ulasan.nama}
              </h3>
              
              <p className="text-sm text-gray-700 italic mb-3">
                {ulasan.ulasan}
              </p>
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-4 h-4 text-yellow-500"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <span className="text-xs font-bold text-gray-700">5.0</span>
            </div>
          ))}
        </div>
    </div>
  );
}