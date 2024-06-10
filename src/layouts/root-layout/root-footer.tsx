export function RootFooter() {
  return (
    <div className="flex flex-col text-primary-100">
      {/* --- Info --- */}
      <div className="flex w-full gap-32 bg-primary-footer px-64 py-32 text-primary-100 phones:flex-col phones:items-start phones:gap-64 phones:px-32">
        {/* --- Alamat --- */}
        <div className="flex w-1/3 flex-col gap-48 phones:w-full">
          <p className="font-bold">Alamat</p>
          <div className="flex flex-col gap-32">
            <div className="flex flex-col gap-8">
              <p className="font-bold">Jalan Kartini Soposurung</p>
              <p>Balige - Toba Samosir</p>
              <p>Sumatera Utara 22312</p>
            </div>
            <div className="flex flex-col gap-8">
              <p className="font-bold">
                <span className="underline">Phone</span>: 0632-4320052
              </p>
              <p>
                <span className="underline">Fax</span>: 0632-4320052
              </p>
              <p>
                <span className="underline">Email</span>:
                smanduabalige@yahoo.co.id
              </p>
            </div>
            <div className="flex items-center gap-8">
              <img src="/icon/facebook.svg" alt="facebook" loading="lazy" />
              <img src="/icon/google.svg" alt="google" loading="lazy" />
              <img src="/icon/youtube.svg" alt="youtube" loading="lazy" />
              <img src="/icon/instagram.svg" alt="instagram" loading="lazy" />
            </div>
          </div>
        </div>
        {/* --- Populer --- */}
        <div className="flex w-1/3 flex-col gap-48 phones:w-full">
          <p className="font-bold">Populer</p>
        </div>
        {/* --- Kontak Kami --- */}
        <div className="flex w-1/3 flex-col gap-48 phones:w-full">
          <p className="font-bold">Kontak Kami</p>
          <p>
            Sampaikan kritik, saran, komentar, aduan yang anda miliki ke kontak
            kami agar kami dapat memberikan layanan terbaik kepada anda
          </p>
          <div className="flex">
            <button
              type="button"
              className="rounded-2xl bg-primary-500 p-12 text-primary-100 hover:bg-primary-400"
            >
              Kontak
            </button>
          </div>
        </div>
      </div>
      {/* --- Copyright --- */}
      <div className="w-full bg-primary-footer">
        <div className="flex flex-col gap-16 px-64 py-32 phones:text-center">
          <p>
            Copyright &#169; 2024 All rights reserves by{' '}
            <span className="font-bold">SMAN 2 Balige</span>
          </p>
          <p>
            Designer and maintained by:{' '}
            <span className="font-bold">Leriston Sinaga</span>
          </p>
        </div>
      </div>
    </div>
  )
}
