export const metadata = {
  title: '404 - Halaman Tidak Ditemukan | ZRDigitalTech',
  alternates: { canonical: null },
  robots: {
    index: false,
    follow: false
  }
};

const Index = () => {
  return (
    <>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404 - Halaman Tidak Ditemukan</h1>
        <p>Maaf, halaman yang Anda cari tidak tersedia atau mungkin telah dipindahkan.</p>
        <a href="/">Kembali ke Beranda</a>
      </div>
    </>
  );
};

export default Index;