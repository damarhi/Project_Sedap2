import Error from "../components/Error";

export default function Error400(){
    return(
        <div>
          <Error jenis="Error 400 Bad Request" jenis2="400"
          deskripsi="Ups! Permintaanmu tidak bisa diproses karena ada kesalahan format. Coba cek kembali dan kirim ulang" 
          gambar="img/400.png"/>
        </div>
    )
}