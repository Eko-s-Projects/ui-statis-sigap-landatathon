import { KemensosShell, PageHeader } from "@/components/layout/KemensosShell"
import { kemensosNav } from "./nav"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { dimensionWeights } from "@/lib/data"
import { CheckCircle2 } from "lucide-react"

const dims = dimensionWeights.map((d) => d.code)

const pairwiseValues: Record<string, string> = {
  "A-B": "1/2", "A-C": "1", "A-K": "1/3",
  "B-C": "2", "B-K": "1/2",
  "C-K": "1/3",
}

export default function Ahp() {
  return (
    <KemensosShell navItems={kemensosNav} userName="Dian Ayu Lestari" userSubtitle="Direktorat Rehabilitasi Sosial">
      <PageHeader title="Pengaturan Bobot AHP" subtitle="Perbandingan berpasangan dimensi risiko ABCK (Analytic Hierarchy Process)" />
      <main className="flex-1 px-6 pb-6 space-y-6">
        <div className="grid lg:grid-cols-5 gap-6">
          <Card className="lg:col-span-3">
            <CardHeader className="pb-0">
              <h2 className="font-semibold text-neutral-900 text-sm">Matriks Perbandingan Berpasangan — Dimensi</h2>
              <p className="text-xs text-neutral-500 mt-1">Skala Saaty 1–9. Nilai dapat diubah oleh ahli Kementerian Sosial sesuai relevansi tiap dimensi terhadap risiko pengunduran diri.</p>
            </CardHeader>
            <CardContent className="pt-4 overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr>
                    <th className="p-2"></th>
                    {dims.map((d) => (
                      <th key={d} className="p-2 text-center font-semibold text-neutral-500 text-xs">{d}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {dims.map((rowDim) => (
                    <tr key={rowDim}>
                      <td className="p-2 font-semibold text-neutral-500 text-xs">{rowDim}</td>
                      {dims.map((colDim) => {
                        if (rowDim === colDim) {
                          return (
                            <td key={colDim} className="p-1.5 text-center">
                              <div className="w-16 h-9 mx-auto rounded-md bg-neutral-100 flex items-center justify-center text-neutral-400 text-xs">1</div>
                            </td>
                          )
                        }
                        const isUpper = dims.indexOf(rowDim) < dims.indexOf(colDim)
                        const key = isUpper ? `${rowDim}-${colDim}` : `${colDim}-${rowDim}`
                        const raw = pairwiseValues[key]
                        const displayValue = isUpper ? raw : raw.startsWith("1/") ? raw.slice(2) : `1/${raw}`
                        return (
                          <td key={colDim} className="p-1.5 text-center">
                            <Input
                              defaultValue={displayValue}
                              className="w-16 h-9 text-center mx-auto text-xs"
                            />
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-5 flex items-center justify-between bg-emerald-50 border border-emerald-200 rounded-lg px-4 py-3">
                <div className="flex items-center gap-2 text-emerald-800 text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Consistency Ratio: <b>0.04</b> (≤ 0.1 — konsisten)</span>
                </div>
                <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">Hitung Ulang Bobot</Button>
              </div>
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader className="pb-0">
              <h2 className="font-semibold text-neutral-900 text-sm">Bobot Dimensi Hasil AHP</h2>
              <p className="text-xs text-neutral-500 mt-1">Eigenvector utama dari matriks perbandingan.</p>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              {dimensionWeights.map((d) => (
                <div key={d.code}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span className="font-medium text-neutral-700">{d.code} · {d.label}</span>
                    <span className="text-neutral-500">{d.weight}%</span>
                  </div>
                  <Progress value={d.weight} className="h-2" />
                </div>
              ))}
              <p className="text-xs text-neutral-400 pt-2 border-t border-neutral-100">
                Bobot indikator per dimensi (mis. A1 vs A2) diatur pada level yang sama melalui matriks terpisah, dapat diakses dari setiap kartu dimensi di atas.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </KemensosShell>
  )
}
