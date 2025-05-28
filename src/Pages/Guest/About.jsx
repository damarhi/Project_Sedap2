export default function About() {
  return (
    <div className="flex p-8 max-w-full mx-auto mt-[50px] ">
      {/* Gambar di sisi kiri */}
      <div className="w-full md:w-1/2 lg:w-5/12 md:ml-auto mb-12 md:mb-0 mt-12 md:mt-0">
      
        <div className="w-full">
          {/* Cek jika ada produk dan tampilkan gambar */}
            <img
              src="https://cdn.grid.id/crop/0x0:0x0/360x240/photo/2023/04/18/97595e2d2e60ec5198c2e591584466cd-20230418112300.jpg"
              width="600"
              height="600"
              className="rounded-xl shadow-md object-cover w-full h-full"
            />
        </div>
      </div>

      {/* Teks di sisi kanan */}
      <div className="w-full md:w-1/2 ml-auto">
        <h1 className="font-bold text-green-600 text-center mb-[30px] text-3xl">
          Tentang Restoran Sedap
        </h1>
        <p className="text-[22px] text-gray-700 mb-4 text-center">
          Selamat datang di{" "}
          <span className="font-semibold text-green-700">Restoran Sedap</span> — 
          Tempat terbaik untuk menikmati beragam pilihan hidangan lezat, sehat, 
          dan berkualitas. Kami dengan bangga menyajikan produk unggulan seperti 
          roti segar, susu murni, keju premium, kopi lokal, dan berbagai pilihan lainnya.
        </p>

        <p className="text-[22px] text-gray-700 mb-4 text-center">
          Sejak awal berdiri, kami berkomitmen untuk memberikan layanan terbaik 
          dan bahan makanan yang dapat dipercaya kepada pelanggan. Dengan semangat 
          lokal dan cita rasa yang autentik, Restoran Sedap hadir untuk memenuhi 
          kebutuhan harian Anda dengan penuh kasih dan kenikmatan.
        </p>
      </div>
    </div>
  );
}
