import Logo from "../components/Logo";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
        <div id="footer-container" className="bg-white w-full z-20 top-0 start-0 mt-12">
            <footer className="footer pb-5">
                <div className="container mx-auto px-4 ">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        <div className="col-span-1 ml-10">
                            <a href="#">
                                <img src="https://avatar.iran.liara.run/public/12" alt="" width={130}/>
                            </a>
                            <div className="mt-5 mb-5">
                                Jl. Yos Sudarso No.KM, RW.4, Umban Sari, Kec. Rumbai, Kota Pekanbaru, Riau 28265
                            </div>
                        </div>                     
                        <div className="col-span-1 px-60">
                            <h6 className="text-lg font-semibold">Contact</h6>
                            <table className="mt-4 space-y-2">
                                <tr><td>Email</td>:<td></td><td>MakananSedap@gmail.com</td></tr>
                                <tr><td>Instagram</td>:<td></td><td>@_RestoSedap</td></tr>
                                <tr><td>WhatsApp</td>:<td></td><td>08123456789</td></tr>
                            </table>
                        </div>
                        
                        <div className="col-span-1 px-100">
                            <h6 className="text-lg font-semibold">Navigation</h6>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-gray-700 hover:text-blue-500">Home</a></li>
                                <li><a href="#About" className="text-gray-700 hover:text-blue-500">About</a></li>
                                <li><a href="#Produk" className="text-gray-700 hover:text-blue-500">Product</a></li>
                        
                            </ul>
                        </div>
                    
                    </div>
                    <div className="footer-bottom mt-12">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="col-span-1">
                                Copyright ©2021 <a href="#" className="font-semibold text-blue-500">Jobhub</a>. All Rights Reserved
                            </div>
                            <div className="col-span-1 text-md-end text-start">
                                <div className="footer-social flex space-x-4">
                                <a href="#" className="text-gray-700 hover:text-blue-500">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-500">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-500">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="text-gray-700 hover:text-blue-500">
                                    <FaLinkedinIn />
                                </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    
                </div>
            </footer>
        </div>
    );
}
