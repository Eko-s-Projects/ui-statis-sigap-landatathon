import { useState } from "react"
import { TopNavShell, PageHeader } from "@/components/layout/TopNavShell"
import { waliAsuhNav } from "./nav"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SendHorizonal, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"
import { students } from "@/lib/data"

const authorityClass: Record<string, string> = {
  normatif: "bg-blue-50 text-blue-700",
  teknis: "bg-indigo-50 text-indigo-700",
  pendukung: "bg-neutral-100 text-neutral-600",
}

const conversations = [
  { student: students[0], lastMessage: "Kalau dia menolak makan sama sekali...", active: true, unread: 0 },
  { student: students[1], lastMessage: "Bagaimana menanggapi keinginan pulang berulang?", active: false, unread: 2 },
  { student: students[2], lastMessage: "Apakah keterlambatan tugas perlu ditindak?", active: false, unread: 0 },
]

function UserBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-end">
      <div className="bg-neutral-900 text-white px-4 py-2.5 max-w-lg text-sm rounded-2xl rounded-tr-sm">{children}</div>
    </div>
  )
}

function BotBubble({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-start">
      <div className="bg-neutral-50 border border-neutral-200 px-4 py-3.5 max-w-xl text-sm rounded-2xl rounded-tl-sm space-y-3">
        {children}
      </div>
    </div>
  )
}

export default function KmsChat() {
  const [value, setValue] = useState("")

  return (
    <TopNavShell navItems={waliAsuhNav} userName="Sari Handayani" userSubtitle="Asrama Melati">
      <PageHeader title="Panduan Pengasuhan" subtitle="Knowledge Management System — tanya jawab berbasis basis pengetahuan resmi" />
      <main className="flex px-4 sm:px-6 pb-6 gap-4 h-[calc(100vh-11.5rem)] min-h-120">
        {/* Conversation list */}
        <aside className="hidden lg:flex w-72 flex-col border border-neutral-200 rounded-xl bg-white overflow-hidden shrink-0">
          <div className="px-4 py-3 border-b border-neutral-100">
            <h2 className="text-sm font-medium text-neutral-800">Percakapan per Peserta Didik</h2>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((c) => (
              <button
                key={c.student.id}
                className={cn(
                  "w-full text-left px-4 py-3 border-b border-neutral-50 hover:bg-neutral-50 transition-colors",
                  c.active && "bg-teal-50/60 hover:bg-teal-50/60"
                )}
              >
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-medium text-neutral-800 truncate">{c.student.name}</p>
                  {c.unread > 0 && (
                    <span className="text-[10px] bg-teal-600 text-white rounded-full w-4 h-4 flex items-center justify-center shrink-0">{c.unread}</span>
                  )}
                </div>
                <p className="text-xs text-neutral-400 truncate mt-0.5">{c.lastMessage}</p>
              </button>
            ))}
          </div>
          <div className="px-4 py-3 border-t border-neutral-100">
            <button className="w-full flex items-center justify-center gap-1.5 text-xs text-neutral-500 hover:text-teal-700 py-1.5">
              <MessageCircle className="w-3.5 h-3.5" /> Pertanyaan umum baru
            </button>
          </div>
        </aside>

        {/* Chat panel */}
        <div className="flex-1 flex flex-col border border-neutral-200 rounded-xl bg-white overflow-hidden min-w-0">
          <div className="px-5 py-3 border-b border-neutral-100 flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-neutral-800">Ahmad Ramadhan</p>
              <p className="text-xs text-neutral-400">Kelas 8B · Konteks aktif dari daftar prioritas</p>
            </div>
            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Risiko Tinggi · 78</Badge>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            <UserBubble>
              Ahmad minggu ini murung, sering menyendiri, dan bilang mau pulang karena kangen ibunya. Apa yang harus saya lakukan?
            </UserBubble>

            <BotBubble>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">Langkah Segera</p>
                <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                  <li>Ajak bicara empat mata di tempat yang nyaman, tanpa menghakimi keinginannya untuk pulang.</li>
                  <li>Validasi perasaan rindu sebagai hal wajar, bukan kelemahan.</li>
                  <li>Fasilitasi komunikasi terjadwal dengan keluarga (telepon/video call) minggu ini.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">Hal yang Perlu Dihindari</p>
                <ul className="list-disc list-inside space-y-0.5 text-neutral-600">
                  <li>Jangan meremehkan perasaannya atau membandingkan dengan siswa lain.</li>
                  <li>Hindari memaksa target akademik dalam kondisi emosional saat ini.</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-neutral-800 mb-1">Kondisi yang Mengharuskan Eskalasi</p>
                <p className="text-neutral-600">
                  Jika dalam 1–2 minggu tidak ada perbaikan, atau muncul penolakan makan/tidur berkelanjutan, segera koordinasikan dengan wali asrama dan tenaga pendamping psikososial.
                </p>
              </div>
              <div className="pt-2 border-t border-neutral-200">
                <p className="font-semibold text-neutral-800 mb-1.5">Sumber Rujukan</p>
                <div className="flex flex-wrap gap-1.5">
                  <Badge className={cn("font-medium border-0", authorityClass.normatif)}>Normatif · Inpres No. 8/2025</Badge>
                  <Badge className={cn("font-medium border-0", authorityClass.teknis)}>Panduan Teknis · Modul Pengasuhan Digital</Badge>
                  <Badge className={cn("font-medium border-0", authorityClass.pendukung)}>Pendukung · Trauma-Informed Care</Badge>
                </div>
              </div>
            </BotBubble>

            <UserBubble>Kalau dia menolak makan sama sekali, apa itu sudah termasuk kondisi darurat?</UserBubble>

            <BotBubble>
              <p className="text-neutral-500 italic">
                Jawaban tidak ditemukan pada basis pengetahuan dengan skor relevansi memadai untuk pertanyaan spesifik ini. Disarankan untuk berkonsultasi langsung dengan wali asrama atau tenaga kesehatan terdekat.
              </p>
              <p className="text-xs text-neutral-400">Pertanyaan ini telah dicatat untuk pengembangan materi kompetensi wali asuh.</p>
            </BotBubble>
          </div>

          <div className="border-t border-neutral-200 p-4">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setValue("")
              }}
              className="flex items-center gap-2"
            >
              <Input
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Tanyakan panduan pengasuhan..."
                className="rounded-full"
              />
              <Button type="submit" size="icon" className="rounded-full bg-teal-700 hover:bg-teal-800 shrink-0">
                <SendHorizonal className="w-4 h-4" />
              </Button>
            </form>
          </div>
        </div>
      </main>
    </TopNavShell>
  )
}
