import { useState } from "react"
import { TopNavShell, PageHeader } from "@/components/layout/TopNavShell"
import { waliAsuhNav } from "./nav"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { students, abckIndicators } from "@/lib/data"
import { Sparkles, CheckCircle2, History } from "lucide-react"

const dimensionTitles: Record<string, string> = {
  A: "Kehadiran",
  B: "Perilaku & Emosi",
  C: "Capaian",
  K: "Keterikatan & Kondisi Keluarga",
}

export default function Pemantauan() {
  const [saved, setSaved] = useState(false)
  const student = students[0]

  const scaleIndicators = abckIndicators.filter((i) => i.code === "A1" || i.code === "A2" || i.code === "C1" || i.code === "C2")
  const checkIndicators = abckIndicators.filter((i) => i.dimension === "B" || i.dimension === "K")

  return (
    <TopNavShell navItems={waliAsuhNav} userName="Sari Handayani" userSubtitle="Asrama Melati">
      <PageHeader title="Pemantauan Berkala Peserta Didik" subtitle="Isi kondisi peserta didik minggu ini" />
      <main className="flex-1 px-4 sm:px-6 pb-10">
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {/* Main form column */}
          <div className="lg:col-span-2 space-y-5">
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">Peserta Didik</label>
              <Select defaultValue={student.id}>
                <SelectTrigger className="w-full bg-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {students.map((s) => (
                    <SelectItem key={s.id} value={s.id}>{s.name} — Kelas {s.class}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Card className="gap-4">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-2">
                  <Badge className="bg-teal-500/10 text-teal-700 border-0 hover:bg-teal-500/10">
                    <Sparkles className="w-3 h-3 mr-1" /> Diproses oleh LLM
                  </Badge>
                  <h2 className="font-medium text-neutral-800 text-sm">Uraian Bebas</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-xs text-neutral-500 leading-relaxed">
                  Tuliskan kondisi peserta didik dengan bahasa sehari-hari. Sistem akan mengekstraksi informasi dan memetakannya ke indikator risiko secara otomatis.
                </p>
                <Textarea
                  rows={4}
                  className="resize-none"
                  defaultValue="Minggu ini Ahmad terlihat lebih murung, dua kali tidak ikut kegiatan asrama malam, dan sempat bilang ingin pulang karena kangen ibunya di rumah."
                />
                <div className="flex items-start gap-2 bg-teal-50 border border-teal-100 rounded-lg p-3 text-xs text-teal-800">
                  <Sparkles className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Terdeteksi otomatis: <b>A2</b> (kehadiran kegiatan asrama menurun), <b>B1</b> (tampak sedih/murung), <b>K2</b> (menyampaikan keinginan pulang)
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="gap-4">
              <CardHeader className="pb-0">
                <h2 className="font-medium text-neutral-800 text-sm">Formulir Terstruktur (Dimensi ABCK)</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">A · {dimensionTitles.A}</p>
                    <div className="space-y-4">
                      {scaleIndicators.filter((i) => i.dimension === "A").map((i) => (
                        <div key={i.code} className="space-y-2">
                          <label className="text-sm text-neutral-700">{i.code}. {i.label}</label>
                          <Slider defaultValue={[i.code === "A2" ? 2 : 4]} max={4} step={1} />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">C · {dimensionTitles.C}</p>
                    <div className="space-y-4">
                      {scaleIndicators.filter((i) => i.dimension === "C").map((i) => (
                        <div key={i.code} className="space-y-2">
                          <label className="text-sm text-neutral-700">{i.code}. {i.label}</label>
                          <Slider defaultValue={[i.code === "C1" ? 3 : 1]} max={4} step={1} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-px bg-neutral-100" />

                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">B · {dimensionTitles.B}</p>
                    <div className="space-y-2.5">
                      {checkIndicators.filter((i) => i.dimension === "B").map((i, idx) => (
                        <label key={i.code} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <Checkbox defaultChecked={idx === 0 || idx === 2} className="mt-0.5" /> {i.label}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-neutral-400 uppercase tracking-wide mb-3">K · {dimensionTitles.K}</p>
                    <div className="space-y-2.5">
                      {checkIndicators.filter((i) => i.dimension === "K").map((i, idx) => (
                        <label key={i.code} className="flex items-start gap-2.5 text-sm text-neutral-700">
                          <Checkbox defaultChecked={idx === 0 || idx === 1} className="mt-0.5" /> {i.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Side summary column */}
          <div className="space-y-5 lg:sticky lg:top-20">
            <Card className="gap-4">
              <CardContent className="pt-1">
                <div className="flex items-center gap-3">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback className="bg-teal-100 text-teal-700 font-medium">
                      {student.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="font-medium text-neutral-900 text-sm truncate">{student.name}</p>
                    <p className="text-xs text-neutral-500">Kelas {student.class} · Asrama {student.dorm}</p>
                  </div>
                </div>
                <div className="h-px bg-neutral-100 my-4" />
                <div className="flex items-center justify-between text-sm">
                  <span className="text-neutral-500">Skor risiko saat ini</span>
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 font-medium">{student.score}</Badge>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span className="text-neutral-500">Perubahan minggu lalu</span>
                  <span className="text-red-600 font-medium">+{student.deltaScore} poin</span>
                </div>
              </CardContent>
            </Card>

            <Card className="gap-3">
              <CardHeader className="pb-0">
                <div className="flex items-center gap-1.5 text-neutral-800">
                  <History className="w-3.5 h-3.5" />
                  <h2 className="font-medium text-sm">Riwayat Pemantauan</h2>
                </div>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-neutral-700">10 Agu 2026</p>
                    <p className="text-xs text-neutral-400">Formulir + uraian bebas</p>
                  </div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">66</Badge>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-neutral-700">3 Agu 2026</p>
                    <p className="text-xs text-neutral-400">Formulir terstruktur</p>
                  </div>
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">60</Badge>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-teal-700 hover:bg-teal-800" size="lg" onClick={() => setSaved(true)}>
              {saved ? <><CheckCircle2 className="w-4 h-4" /> Tersimpan</> : "Simpan Pemantauan"}
            </Button>
          </div>
        </div>
      </main>
    </TopNavShell>
  )
}
