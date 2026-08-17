import { KemensosShell, PageHeader } from "@/components/layout/KemensosShell"
import { kemensosNav } from "./nav"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { schoolAggregates, riskTrendNational } from "@/lib/data"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function Monitoring() {
  const totalStudents = schoolAggregates.reduce((a, s) => a + s.students, 0)
  const totalHigh = schoolAggregates.reduce((a, s) => a + s.highRisk, 0)
  const totalMid = schoolAggregates.reduce((a, s) => a + s.midRisk, 0)
  const totalCaregivers = schoolAggregates.reduce((a, s) => a + s.caregivers, 0)

  return (
    <KemensosShell navItems={kemensosNav} userName="Dian Ayu Lestari" userSubtitle="Direktorat Rehabilitasi Sosial">
      <PageHeader title="Monitoring Agregat" subtitle="Pola risiko lintas Sekolah Rakyat — Periode Minggu 33, 2026" />
      <main className="flex-1 px-6 pb-6 space-y-6">
        <div className="grid sm:grid-cols-4 gap-4">
          <Card><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Total Peserta Didik</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">{totalStudents.toLocaleString("id-ID")}</p>
          </CardContent></Card>
          <Card className="border-red-200"><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Risiko Tinggi</p>
            <p className="text-2xl font-semibold text-red-600 mt-1">{totalHigh}</p>
          </CardContent></Card>
          <Card className="border-amber-200"><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Risiko Sedang</p>
            <p className="text-2xl font-semibold text-amber-600 mt-1">{totalMid}</p>
          </CardContent></Card>
          <Card><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Wali Asuh Aktif</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">{totalCaregivers}</p>
          </CardContent></Card>
        </div>

        <Card>
          <CardHeader className="pb-0">
            <h2 className="font-semibold text-neutral-900 text-sm">Tren Nasional Peserta Didik Berisiko (6 Minggu Terakhir)</h2>
          </CardHeader>
          <CardContent className="pt-4">
            <ResponsiveContainer width="100%" height={220}>
              <AreaChart data={riskTrendNational} margin={{ left: -20, right: 10 }}>
                <defs>
                  <linearGradient id="tinggi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="sedang" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f1f1" />
                <XAxis dataKey="week" tick={{ fontSize: 11, fill: "#a3a3a3" }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fontSize: 11, fill: "#a3a3a3" }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #e5e5e5" }} />
                <Area type="monotone" dataKey="tinggi" stroke="#ef4444" fill="url(#tinggi)" strokeWidth={2} name="Risiko Tinggi" />
                <Area type="monotone" dataKey="sedang" stroke="#f59e0b" fill="url(#sedang)" strokeWidth={2} name="Risiko Sedang" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="p-0 overflow-hidden">
          <div className="px-5 py-4 border-b border-neutral-100">
            <h2 className="font-semibold text-neutral-900 text-sm">Ringkasan per Sekolah Rakyat</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sekolah</TableHead>
                <TableHead>Wilayah</TableHead>
                <TableHead>Peserta Didik</TableHead>
                <TableHead>Risiko Tinggi</TableHead>
                <TableHead>Risiko Sedang</TableHead>
                <TableHead>Wali Asuh</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {schoolAggregates.map((s) => (
                <TableRow key={s.school}>
                  <TableCell className="font-medium text-neutral-900">{s.school}</TableCell>
                  <TableCell className="text-neutral-500">{s.region}</TableCell>
                  <TableCell>{s.students}</TableCell>
                  <TableCell><Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">{s.highRisk}</Badge></TableCell>
                  <TableCell><Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">{s.midRisk}</Badge></TableCell>
                  <TableCell className="text-neutral-500">{s.caregivers}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="border-indigo-200 bg-indigo-50/50">
          <CardContent className="pt-1">
            <h3 className="font-medium text-indigo-900 text-sm mb-1">Kebutuhan Penguatan Kompetensi</h3>
            <p className="text-sm text-indigo-800/80 leading-relaxed">
              SR Menengah Pertama 07 (Surabaya) menunjukkan proporsi risiko tinggi tertinggi (6,2%) dengan pertanyaan KMS tanpa jawaban memadai terbanyak pada topik "kesulitan adaptasi asrama". Disarankan menjadi prioritas pelatihan wali asuh berikutnya.
            </p>
          </CardContent>
        </Card>
      </main>
    </KemensosShell>
  )
}
