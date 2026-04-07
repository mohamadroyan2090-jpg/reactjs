function App() {
  return (
    <>
      {/* Header */}
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          {/* Logo */}
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#" className="text-decoration-none">
              <i className="fa-solid fa-book fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2" style={{ color: "#000000" }}>bookstore</span>
            </a>
          </div>

          {/* Menu */}
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2">Home</a></li>
            <li><a href="#" className="nav-link px-2">Book</a></li>
            <li><a href="#" className="nav-link px-2">Team</a></li>
            <li><a href="#" className="nav-link px-2">Contact</a></li>
          </ul>

          {/* Button */}
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Sign-up</button>
          </div>
        </header>

        {/* Hero */}
        <div className="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                Atomic Habits: Perubahan Kecil Memberikan Hasil Yang Luar Biasa.
              </h1>
              <p className="lead">
                Cara untuk membiasakan diri untuk lebih baik dan melawan.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
              </div>
            </div>
            <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
              <img className="rounded-lg-3" src="https://picsum.photos/720/600" alt="" width="720" />
            </div>
          </div>
        </div>

{/* Product List */}
<section className="py-5 text-center container">
  <div className="row py-lg-5">
    <div className="col-lg-6 col-md-8 mx-auto">
      <h1 className="fw-light">Best Seller</h1>
      <p className="lead text-body-secondary">
        Koleksi buku-buku terlaris dan viral yang wajib kamu baca!
      </p>
      <div className="d-flex gap-3 justify-content-center">
        <a href="#" className="btn btn-primary">Lihat Semua</a>
        <a href="#" className="btn btn-secondary">Rekomendasi</a>
      </div>
    </div>
  </div>
</section>

<div className="album py-5 bg-body-tertiary">
  <div className="container">
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
      {/* Buku 1 - Atomic Habits */}
      <div className="col">
        <div className="card shadow-sm h-100 d-flex flex-column">
          <img 
            src="https://m.media-amazon.com/images/I/81wgcld4wxL._AC_UF1000,1000_QL80_.jpg" 
            className="card-img-top" 
            alt="Atomic Habits"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title fw-bold">Atomic Habits</h5>
            <h6 className="card-subtitle mb-2 text-muted">James Clear</h6>
            <p className="card-text small flex-grow-1">
              Perubahan kecil yang memberikan hasil luar biasa.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 text-primary mb-0">Rp89.000</span>
              <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>

      {/* Buku 2 - Ikigai */}
      <div className="col">
        <div className="card shadow-sm h-100 d-flex flex-column">
          <img 
            src="https://m.media-amazon.com/images/I/81lz2GjMJyL._AC_UF1000,1000_QL80_.jpg" 
            className="card-img-top" 
            alt="Ikigai"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title fw-bold">Ikigai</h5>
            <h6 className="card-subtitle mb-2 text-muted">Héctor García & Francesc Miralles</h6>
            <p className="card-text small flex-grow-1">
              Rahasia panjang umur dan bahagia ala Jepang.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 text-primary mb-0">Rp75.000</span>
              <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>

      {/* Buku 3 - The Psychology of Money */}
      <div className="col">
        <div className="card shadow-sm h-100 d-flex flex-column">
          <img 
            src="https://m.media-amazon.com/images/I/81beUky0qYL._AC_UF1000,1000_QL80_.jpg" 
            className="card-img-top" 
            alt="The Psychology of Money"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title fw-bold">The Psychology of Money</h5>
            <h6 className="card-subtitle mb-2 text-muted">Morgan Housel</h6>
            <p className="card-text small flex-grow-1">
              Pelajaran abadi tentang kekayaan, keserakahan, dan kebahagiaan.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 text-primary mb-0">Rp95.000</span>
              <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>

      {/* Buku 4 - Laut Bercerita */}
      <div className="col">
        <div className="card shadow-sm h-100 d-flex flex-column">
          <img 
            src="https://cdn.gramedia.com/uploads/items/9786024812830_Laut-Bercerita.jpg" 
            className="card-img-top" 
            alt="Laut Bercerita"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title fw-bold">Laut Bercerita</h5>
            <h6 className="card-subtitle mb-2 text-muted">Leila S. Chudori</h6>
            <p className="card-text small flex-grow-1">
              Novel tentang perjuangan dan pengorbanan aktivis mahasiswa.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 text-primary mb-0">Rp89.000</span>
              <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>

      {/* Buku 5 - Dilan 1990 */}
      <div className="col">
        <div className="card shadow-sm h-100 d-flex flex-column">
          <img 
            src="https://cdn.gramedia.com/uploads/items/9786024245577_Dilan-Diaz.jpg" 
            className="card-img-top" 
            alt="Dilan 1990"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title fw-bold">Dilan 1990</h5>
            <h6 className="card-subtitle mb-2 text-muted">Pidi Baiq</h6>
            <p className="card-text small flex-grow-1">
              Kisah cinta khas Bandung yang romantis dan lucu.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 text-primary mb-0">Rp79.000</span>
              <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>

      {/* Buku 6 - Think and Grow Rich */}
      <div className="col">
        <div className="card shadow-sm h-100 d-flex flex-column">
          <img 
            src="https://m.media-amazon.com/images/I/71QxXv6UfjL._AC_UF1000,1000_QL80_.jpg" 
            className="card-img-top" 
            alt="Think and Grow Rich"
            style={{ height: "250px", objectFit: "cover" }}
          />
          <div className="card-body d-flex flex-column flex-grow-1">
            <h5 className="card-title fw-bold">Think and Grow Rich</h5>
            <h6 className="card-subtitle mb-2 text-muted">Napoleon Hill</h6>
            <p className="card-text small flex-grow-1">
              Klasik pengembangan diri dan kesuksesan finansial.
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <span className="h5 text-primary mb-0">Rp69.000</span>
              <button type="button" className="btn btn-sm btn-outline-primary">Beli Sekarang</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* TEAM */}
        <section className="py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-4">Our Team</h2>
            <div className="row text-center">
              <div className="col-md-4 mb-3">
                <img src="https://i.pravatar.cc/150?img=1" className="rounded-circle mb-3" alt="Royan" />
                <h5>Royan</h5>
                <p className="text-muted">Frontend Developer</p>
              </div>
              <div className="col-md-4 mb-3">
                <img src="https://i.pravatar.cc/150?img=2" className="rounded-circle mb-3" alt="Febi" />
                <h5>Febi</h5>
                <p className="text-muted">Backend Developer</p>
              </div>
              <div className="col-md-4 mb-3">
                <img src="https://i.pravatar.cc/150?img=3" className="rounded-circle mb-3" alt="Rehan" />
                <h5>Rehan</h5>
                <p className="text-muted">UI/UX Designer</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT + MAP */}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row">
              {/* FORM */}
              <div className="col-md-6">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="your@email.com" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Your message..."></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
              </div>

              {/* MAP + INFO */}
              <div className="col-md-6">
                <h5>Location</h5>
                <iframe
                  src="https://www.google.com/maps?q=Banyuwangi&output=embed"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
                <p className="mt-3">📍 Banyuwangi, Indonesia</p>
                <p>📞 0812-3456-7890</p>
                <p>📧 bookstore@gmail.com</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Book</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Team</a></li>
              <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Contact</a></li>
            </ul>
            <p className="text-center text-body-secondary">&copy; 2025 Bookstore. All rights reserved.</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;