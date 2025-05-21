export default function Error({ gambar, deskripsi, jenis, jenis2 }) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-[#D4F4DD] relative overflow-hidden">
        <div className="absolute right-12 text-[250px] text-white font-extrabold opacity-50 [writing-mode:vertical-lr] leading-[0.8em]">
          {jenis2}
        </div>
        {/* Konten utama */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Teks */}
          <div className="text-center md:text-left max-w-md">
            <h1 className="text-9xl font-bold text-gray-800 ">Ooops...</h1>
            <h2 className="text-5xl font-medium text-gray-700 mt-4">{jenis }</h2>
            <p className="mt-4 text-2xl text-gray-600">{deskripsi}</p>
  
            <button
              onClick={() => (window.location.href = "/")}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-8 rounded-lg"
            >
              Go Back
            </button>
          </div>
  
          {/* Gambar */}
          <div>
            <img src={gambar} alt="" className="w-150 h-auto object-contain" />
          </div>
        </div>
      </div>
    );
  }
  