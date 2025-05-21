import Error from "../components/Error";

export default function Error401(){
    return(
        <div>
          <Error jenis="Error 401 Unauthorized" jenis2="401"
          deskripsi="Akses ditolak. Silakan login untuk melanjutkan" 
          gambar="img/401.png"/>
        </div>
    )
}