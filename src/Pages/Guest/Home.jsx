import About from "./About";
import Produk from "./Produk";
import Ulasan from "./Ulasan";




export default function Guest() {

  return (
    <div className="pt-20 bg-gray-100 p-4 ">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          
            <section id="#" className="scroll-mt-20"> 
            <div className="w-full md:w-1/2 lg:w-5/12 mt-12 md:mt-0">
            <h2
                className="text-4xl font-bold mb-4"
                data-sal-delay="200"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Makan Makanan Enak Membuat Hari Kamu Menyenangkan
              </h2>
              <p
                className="text-gray-600 mb-6"
                data-sal-delay="300"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Ayoo.. Temukan & Pesan Makanan yang Kamu Sukai
              </p>
              <div className="flex space-x-4">
                <a
                  href="#Produk"
                  className="bg-green-600 text-white py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300"
                  data-sal-delay="400"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  Top Product
                </a>
                <a
                  href="#About"
                  className="border border-green-600 text-green-600 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-green-50 transition duration-300"
                  data-sal-delay="500"
                  data-sal="slide-up"
                  data-sal-duration="800"
                >
                  About Us
                </a>

                
              </div>
            </div>
            </section>
            

          {/* Menambahkan margin pada div penampil makanan */}
          <div className="w-full md:w-1/2 lg:w-5/12 md:ml-auto mb-12 md:mb-0 mt-12 md:mt-0">
            <div className="w-full">

                <img
                  src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1733967095/attached_image/7-makanan-korea-yang-menyehatkan-cocok-di-lidah-lokal.jpg"

                  width="600"
                  height="600"
                  className="rounded-xl shadow-md object-cover"
                />
            
            </div>
          </div>
        </div>

        <section id="About" className="scroll-mt-20"> <About /></section>
        <section id="Produk" className="scroll-mt-20">  <Produk/></section>
        <Ulasan/>

      </div>
    </div>
  );
}
