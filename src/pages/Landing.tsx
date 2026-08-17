import { Link } from "react-router-dom"
import { HeartHandshake, Landmark, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

export default function Landing() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <header className="border-b border-neutral-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-neutral-950 flex items-center justify-center">
              <span className="text-white font-bold text-xs">SR</span>
            </div>
            <div>
              <p className="font-semibold text-neutral-900 leading-tight text-sm">SIGAP-SR</p>
              <p className="text-xs text-neutral-500 leading-tight">Sistem Informasi Deteksi Dini dan Penguatan Pengasuhan Sekolah Rakyat</p>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-16 w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-semibold text-neutral-900 tracking-tight">Selamat datang</h1>
          <p className="text-neutral-500 mt-2">Pilih peran Anda untuk melanjutkan ke prototipe aplikasi</p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          <Link
            to="/wali-asuh"
            className="group relative bg-white rounded-2xl border border-neutral-200 p-7 hover:border-neutral-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all overflow-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-5">
              <HeartHandshake className="w-5 h-5" strokeWidth={2} />
            </div>
            <h2 className="font-semibold text-neutral-900">Wali Asuh</h2>
            <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
              Pantau kondisi peserta didik, akses panduan pengasuhan, dan latihan simulasi penanganan masalah anak.
            </p>
            <span className="inline-flex items-center gap-1 text-neutral-900 text-sm font-medium mt-6">
              Masuk sebagai Wali Asuh
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>

          <Link
            to="/kemensos"
            className="group relative bg-white rounded-2xl border border-neutral-200 p-7 hover:border-neutral-900 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all overflow-hidden"
          >
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-5">
              <Landmark className="w-5 h-5" strokeWidth={2} />
            </div>
            <h2 className="font-semibold text-neutral-900">Kementerian Sosial</h2>
            <p className="text-sm text-neutral-500 mt-1.5 leading-relaxed">
              Pantau pola risiko lintas Sekolah Rakyat, atur bobot AHP, dan kelola basis pengetahuan pengasuhan.
            </p>
            <span className="inline-flex items-center gap-1 text-neutral-900 text-sm font-medium mt-6">
              Masuk sebagai Pengelola Program
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <p className="text-center text-xs text-neutral-400 mt-12">
          Prototipe UI statis — dibuat untuk menggambarkan output aplikasi. Data pada tampilan bersifat dummy.
        </p>
      </main>
    </div>
  )
}
