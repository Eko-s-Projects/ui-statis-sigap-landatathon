import { useState } from "react"
import { TopNavShell, PageHeader } from "@/components/layout/TopNavShell"
import { waliAsuhNav } from "./nav"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { CheckCircle2, AlertTriangle, ArrowRight, SendHorizonal, RotateCcw, XCircle } from "lucide-react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

const authorityClass: Record<string, string> = {
  normatif: "bg-blue-50 text-blue-700",
  teknis: "bg-indigo-50 text-indigo-700",
  pendukung: "bg-neutral-100 text-neutral-600",
}

const rubric = [
  {
    status: "met" as const,
    title: "Validasi Emosi",
    detail: "Anda memvalidasi perasaan Rian ('saya paham pasti berat ya...') sebelum masuk ke solusi, bukan langsung menasihati atau menyangkal perasaannya.",
  },
  {
    status: "met" as const,
    title: "Menggali Akar Masalah",
    detail: "Anda menanyakan sejak kapan perasaan itu muncul dan menemukan konteks tambahan (kondisi adik sakit), membantu mengidentifikasi faktor K4 — permasalahan keluarga di daerah asal.",
  },
  {
    status: "partial" as const,
    title: "Rencana Tindak Lanjut",
    detail: "Belum menyampaikan langkah konkret setelah menggali cerita, misalnya memfasilitasi komunikasi terjadwal dengan keluarga atau menyampaikan kapan akan berbicara kembali dengan Rian.",
  },
  {
    status: "missed" as const,
    title: "Kriteria Eskalasi",
    detail: "Tidak disebutkan kapan kondisi ini perlu dieskalasikan ke wali asrama, misalnya jika Rian menolak makan atau permasalahan keluarga berlanjut lebih dari 1–2 minggu.",
  },
]

const statusConfig = {
  met: { icon: CheckCircle2, className: "text-teal-600 bg-teal-50", label: "Terpenuhi" },
  partial: { icon: AlertTriangle, className: "text-amber-600 bg-amber-50", label: "Sebagian" },
  missed: { icon: XCircle, className: "text-red-600 bg-red-50", label: "Belum" },
}

export default function Simulasi() {
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <TopNavShell navItems={waliAsuhNav} userName="Sari Handayani" userSubtitle="Asrama Melati">
      <PageHeader title="Simulasi Penanganan Masalah Anak" subtitle="Latihan mandiri menghadapi skenario permasalahan di asrama" />
      <main className="flex-1 px-4 sm:px-6 pb-10">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Chat column */}
          <div className="lg:col-span-2">
            <Card className="p-0 overflow-hidden">
              <div className="px-5 py-3 border-b border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-800">Rian (karakter simulasi AI)</p>
                  <p className="text-xs text-neutral-400">Skenario: Rindu Rumah</p>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-amber-50 text-amber-700 border border-amber-200 font-medium">Sesi Berlangsung</span>
              </div>

              <div className="p-5 space-y-4 h-96 overflow-y-auto">
                <div className="flex justify-start">
                  <div className="bg-neutral-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-md text-sm">
                    <p className="text-xs font-semibold text-neutral-500 mb-1">Rian</p>
                    "Pak/Bu, saya udah gak kuat di sini... saya kangen banget sama ibu. Saya mau pulang aja, gak usah sekolah di sini."
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-neutral-900 text-white rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-md text-sm">
                    Saya paham Rian pasti berat ya jauh dari ibu. Boleh cerita, sejak kapan perasaan ini muncul?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-neutral-100 rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-md text-sm">
                    <p className="text-xs font-semibold text-neutral-500 mb-1">Rian</p>
                    "Udah dari dua minggu lalu, Pak/Bu. Terus tadi malam saya telpon ibu, katanya adik saya sakit di rumah."
                  </div>
                </div>
              </div>

              <div className="border-t border-neutral-200 p-4 space-y-2">
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setShowFeedback(true)
                  }}
                  className="flex items-center gap-2"
                >
                  <Input placeholder="Ketik respons Anda sebagai wali asuh..." className="rounded-full" />
                  <Button type="submit" size="icon" className="rounded-full bg-teal-700 hover:bg-teal-800 shrink-0">
                    <SendHorizonal className="w-4 h-4" />
                  </Button>
                </form>
                <Button
                  variant="outline"
                  onClick={() => setShowFeedback(true)}
                  className="w-full border-teal-200 text-teal-700 hover:bg-teal-50 hover:text-teal-800"
                >
                  Akhiri Sesi &amp; Lihat Umpan Balik
                  <ArrowRight className="w-3.5 h-3.5" />
                </Button>
              </div>
            </Card>
          </div>

          {/* Side column */}
          <div className="space-y-5 lg:sticky lg:top-20">
            <Card className="gap-4">
              <CardHeader className="pb-0">
                <h2 className="font-medium text-neutral-800 text-sm">Pengaturan Skenario</h2>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-neutral-500 mb-1.5 block">Kategori</label>
                  <Select defaultValue="k">
                    <SelectTrigger className="w-full bg-white"><SelectValue /></SelectTrigger>
                    <SelectContent>
                      <SelectItem value="k">K · Keterikatan & Kondisi Keluarga</SelectItem>
                      <SelectItem value="b">B · Perilaku & Emosi</SelectItem>
                      <SelectItem value="a">A · Kehadiran</SelectItem>
                      <SelectItem value="c">C · Capaian</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Skenario dan karakter peserta didik dihasilkan secara dinamis oleh AI berdasarkan kategori yang dipilih.
                </p>
              </CardContent>
            </Card>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-900">
              <p className="font-semibold mb-1">Skenario: "Rindu Rumah"</p>
              <p className="leading-relaxed">
                Anda berperan sebagai wali asuh. Seorang peserta didik bernama <b>"Rian"</b> (karakter simulasi) mendatangi Anda sore ini tampak murung dan menyampaikan ingin berhenti sekolah.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Dialog open={showFeedback} onOpenChange={setShowFeedback}>
        <DialogContent className="sm:max-w-2xl max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-teal-500/10 text-teal-700 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <DialogTitle>Umpan Balik Sesi Simulasi</DialogTitle>
            </div>
            <DialogDescription>
              Skenario "Rindu Rumah" · Kategori K (Keterikatan & Kondisi Keluarga) · Dinilai berdasarkan rubrik yang diturunkan dari basis pengetahuan KMS
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-5">
            <div className="flex items-center gap-4 bg-neutral-50 border border-neutral-100 rounded-lg p-4">
              <div className="text-center shrink-0">
                <p className="text-2xl font-semibold text-teal-700">2.5<span className="text-sm text-neutral-400">/4</span></p>
                <p className="text-[11px] text-neutral-400">Skor Rubrik</p>
              </div>
              <div className="flex-1 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-neutral-500">Kualitas Respons Keseluruhan</span>
                  <span className="font-medium text-neutral-700">Cukup Baik</span>
                </div>
                <Progress value={62} className="h-2" />
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-800 mb-2.5">Penilaian per Kriteria</h3>
              <div className="space-y-2.5">
                {rubric.map((r) => {
                  const cfg = statusConfig[r.status]
                  const Icon = cfg.icon
                  return (
                    <div key={r.title} className="flex items-start gap-3 border border-neutral-100 rounded-lg p-3">
                      <div className={cn("w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5", cfg.className)}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <p className="text-sm font-medium text-neutral-800">{r.title}</p>
                          <Badge variant="outline" className={cn("text-[10px] px-1.5 py-0 border-0", cfg.className)}>{cfg.label}</Badge>
                        </div>
                        <p className="text-xs text-neutral-500 mt-0.5 leading-relaxed">{r.detail}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-neutral-800 mb-2">Saran Perbaikan</h3>
              <ul className="text-sm text-neutral-600 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Tutup respons dengan rencana konkret, misalnya "Nanti sore saya bantu telepon ibu ya, dan besok kita ngobrol lagi."</li>
                <li>Sebutkan batas waktu evaluasi kondisi (mis. 1 minggu) sebelum memutuskan langkah lanjutan bersama wali asrama.</li>
              </ul>
            </div>

            <div className="pt-1 border-t border-neutral-100">
              <h3 className="text-sm font-semibold text-neutral-800 mb-2 pt-3">Sumber Rujukan Penilaian</h3>
              <div className="flex flex-wrap gap-1.5">
                <Badge className={cn("font-medium border-0", authorityClass.normatif)}>Normatif · Inpres No. 8/2025</Badge>
                <Badge className={cn("font-medium border-0", authorityClass.teknis)}>Panduan Teknis · Modul Pengasuhan Anak di Era Digital</Badge>
                <Badge className={cn("font-medium border-0", authorityClass.teknis)}>Panduan Teknis · Materi Pelatihan Wali Asuh BBPPKS</Badge>
                <Badge className={cn("font-medium border-0", authorityClass.pendukung)}>Pendukung · Trauma-Informed Care</Badge>
              </div>
            </div>
          </div>

          <DialogFooter className="sm:justify-between items-center">
            <Link to="/wali-asuh/kms" className="text-sm text-teal-700 font-medium hover:underline inline-flex items-center gap-1">
              Lihat panduan terkait di KMS <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Button variant="outline" onClick={() => setShowFeedback(false)} className="gap-1.5">
              <RotateCcw className="w-3.5 h-3.5" /> Ulangi Simulasi
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </TopNavShell>
  )
}
