export default function Container({children}){
    return(
        <div className="card">
            <h1>Pemrograman Framework Lanjutan</h1>
            <br />
            <img src="img/Foto1.webp" alt="logo" width="600px"></img>
            {children}
            <br />
            <footer>
                <p>2025 - Politeknik Caltex Riau</p>
            </footer>
        </div>
    )
}