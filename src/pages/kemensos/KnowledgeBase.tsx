import { KemensosShell, PageHeader } from "@/components/layout/KemensosShell"
import { kemensosNav } from "./nav"
import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { knowledgeDocs } from "@/lib/data"
import { Plus, FileText, Trash2, Pencil } from "lucide-react"

const authorityBadge: Record<string, { label: string; className: string }> = {
  normatif: { label: "Normatif", className: "bg-blue-50 text-blue-700 border-blue-200" },
  teknis: { label: "Panduan Teknis", className: "bg-indigo-50 text-indigo-700 border-indigo-200" },
  pendukung: { label: "Pendukung", className: "bg-neutral-100 text-neutral-600 border-neutral-200" },
}

export default function KnowledgeBase() {
  return (
    <KemensosShell navItems={kemensosNav} userName="Dian Ayu Lestari" userSubtitle="Direktorat Rehabilitasi Sosial">
      <PageHeader
        title="Manajemen Knowledge Base"
        subtitle="Dokumen rujukan untuk Knowledge Management System (RAG)"
        actions={
          <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
            <Plus className="w-4 h-4" /> Tambah Dokumen
          </Button>
        }
      />
      <main className="flex-1 px-6 pb-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="text-sm text-neutral-500">Total Dokumen</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">{knowledgeDocs.length}</p>
          </Card>
          <Card className="p-4">
            <p className="text-sm text-neutral-500">Normatif / Teknis</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">
              {knowledgeDocs.filter((d) => d.authority !== "pendukung").length}
            </p>
          </Card>
          <Card className="p-4 border-amber-200">
            <p className="text-sm text-neutral-500">Pertanyaan Tanpa Jawaban (7 hari)</p>
            <p className="text-2xl font-semibold text-amber-600 mt-1">18</p>
          </Card>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="px-5 py-4 border-b border-neutral-100">
            <h2 className="font-semibold text-neutral-900 text-sm">Dokumen Rujukan</h2>
          </div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Judul</TableHead>
                <TableHead>Jenjang Otoritas</TableHead>
                <TableHead>Sumber</TableHead>
                <TableHead>Diperbarui</TableHead>
                <TableHead className="text-right">Aksi</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {knowledgeDocs.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium text-neutral-900">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-neutral-400 shrink-0" />
                      {doc.title}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={authorityBadge[doc.authority].className}>
                      {authorityBadge[doc.authority].label}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-neutral-500">{doc.source}</TableCell>
                  <TableCell className="text-neutral-500">{doc.updatedAt}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-500"><Pencil className="w-3.5 h-3.5" /></Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-500 hover:text-red-600"><Trash2 className="w-3.5 h-3.5" /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>

        <Card className="border-indigo-200 bg-indigo-50/50 p-4">
          <h3 className="font-medium text-indigo-900 text-sm mb-1">Pertanyaan Wali Asuh Tanpa Rujukan Memadai</h3>
          <p className="text-sm text-indigo-800/80 leading-relaxed">
            "Bagaimana menangani penolakan makan berkelanjutan pada anak?" — muncul 6 kali minggu ini. Dipertimbangkan sebagai kandidat topik dokumen rujukan baru atau materi pelatihan lanjutan.
          </p>
        </Card>
      </main>
    </KemensosShell>
  )
}
