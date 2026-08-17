export type RiskLevel = "tinggi" | "sedang" | "rendah"

export interface Student {
  id: string
  name: string
  class: string
  dorm: string
  caregiver: string
  score: number
  level: RiskLevel
  deltaScore: number
  factors: string[]
  followUpStatus: "Perlu Tindak Lanjut" | "Sedang Ditangani" | "Selesai" | "Tidak Perlu"
  history: number[]
}

export const students: Student[] = [
  {
    id: "ar",
    name: "Ahmad Ramadhan",
    class: "8B",
    dorm: "Melati",
    caregiver: "Sari Handayani",
    score: 78,
    level: "tinggi",
    deltaScore: 12,
    factors: ["K2 · Keinginan pulang", "B1 · Tampak sedih/cemas", "A2 · Kehadiran asrama"],
    followUpStatus: "Perlu Tindak Lanjut",
    history: [35, 42, 55, 60, 66, 78],
  },
  {
    id: "sn",
    name: "Siti Nurhaliza",
    class: "7A",
    dorm: "Melati",
    caregiver: "Sari Handayani",
    score: 71,
    level: "tinggi",
    deltaScore: 8,
    factors: ["K2 · Keinginan pulang", "K6 · Frekuensi komunikasi keluarga", "B3 · Menyendiri"],
    followUpStatus: "Sedang Ditangani",
    history: [40, 45, 50, 58, 63, 71],
  },
  {
    id: "bp",
    name: "Budi Prasetyo",
    class: "9A",
    dorm: "Anggrek",
    caregiver: "Andi Kurniawan",
    score: 54,
    level: "sedang",
    deltaScore: 5,
    factors: ["A2 · Kehadiran asrama", "C2 · Keterlambatan tugas"],
    followUpStatus: "Perlu Tindak Lanjut",
    history: [30, 33, 40, 45, 49, 54],
  },
  {
    id: "dm",
    name: "Dewi Maharani",
    class: "7C",
    dorm: "Anggrek",
    caregiver: "Andi Kurniawan",
    score: 49,
    level: "sedang",
    deltaScore: -3,
    factors: ["B3 · Menyendiri", "B5 · Keterlibatan kegiatan rendah"],
    followUpStatus: "Selesai",
    history: [55, 52, 50, 51, 52, 49],
  },
  {
    id: "rf",
    name: "Rafi Firmansyah",
    class: "8A",
    dorm: "Melati",
    caregiver: "Sari Handayani",
    score: 21,
    level: "rendah",
    deltaScore: -2,
    factors: [],
    followUpStatus: "Tidak Perlu",
    history: [25, 24, 23, 22, 22, 21],
  },
]

export const abckIndicators = [
  { code: "A1", dimension: "A", label: "Kehadiran kegiatan belajar" },
  { code: "A2", dimension: "A", label: "Kehadiran kegiatan asrama" },
  { code: "B1", dimension: "B", label: "Tampak sedih, cemas, atau mudah tersinggung" },
  { code: "B2", dimension: "B", label: "Keluhan fisik berulang tanpa sebab medis jelas" },
  { code: "B3", dimension: "B", label: "Menyendiri atau kurang berbaur dengan teman" },
  { code: "B4", dimension: "B", label: "Terlibat perselisihan dengan teman" },
  { code: "B5", dimension: "B", label: "Menunjukkan keterlibatan dalam kegiatan bersama" },
  { code: "C1", dimension: "C", label: "Capaian nilai" },
  { code: "C2", dimension: "C", label: "Keterlambatan penyelesaian tugas" },
  { code: "K1", dimension: "K", label: "Membicarakan rumah/keluarga dengan nada sedih" },
  { code: "K2", dimension: "K", label: "Menyampaikan keinginan pulang" },
  { code: "K3", dimension: "K", label: "Kesulitan mengikuti rutinitas dan aturan asrama" },
  { code: "K4", dimension: "K", label: "Menyampaikan adanya permasalahan keluarga di daerah asal" },
  { code: "K5", dimension: "K", label: "Perubahan pola makan atau tidur" },
  { code: "K6", dimension: "K", label: "Frekuensi komunikasi dengan keluarga" },
] as const

export const dimensionWeights = [
  { code: "A", label: "Kehadiran", weight: 22 },
  { code: "B", label: "Perilaku & Emosi", weight: 28 },
  { code: "C", label: "Capaian", weight: 18 },
  { code: "K", label: "Keterikatan & Kondisi Keluarga", weight: 32 },
]

export interface KnowledgeDoc {
  id: string
  title: string
  authority: "normatif" | "teknis" | "pendukung"
  source: string
  updatedAt: string
}

export const knowledgeDocs: KnowledgeDoc[] = [
  { id: "1", title: "Inpres No. 8/2025 tentang Penyelenggaraan Sekolah Rakyat", authority: "normatif", source: "Sekretariat Negara", updatedAt: "12 Jan 2026" },
  { id: "2", title: "Modul Pengasuhan Anak di Era Digital", authority: "teknis", source: "Kemensos & Save the Children", updatedAt: "30 Apr 2026" },
  { id: "3", title: "Materi Pelatihan Wali Asuh dan Wali Asrama", authority: "teknis", source: "BBPPKS Kemensos", updatedAt: "2 Feb 2026" },
  { id: "4", title: "Convention on the Rights of the Child (CRC) — Ringkasan Prinsip", authority: "pendukung", source: "UNICEF", updatedAt: "18 Nov 2025" },
  { id: "5", title: "Prinsip Trauma-Informed Care dalam Pengasuhan", authority: "pendukung", source: "Literatur Akademik", updatedAt: "5 Des 2025" },
]

export const schoolAggregates = [
  { school: "SR Menengah Atas 12", region: "Jakarta Timur", students: 312, highRisk: 14, midRisk: 27, caregivers: 26 },
  { school: "SR Menengah Atas 04", region: "Bandung", students: 268, highRisk: 9, midRisk: 19, caregivers: 22 },
  { school: "SR Menengah Pertama 07", region: "Surabaya", students: 340, highRisk: 21, midRisk: 33, caregivers: 30 },
  { school: "SR Menengah Atas 19", region: "Medan", students: 201, highRisk: 6, midRisk: 15, caregivers: 18 },
]

export const riskTrendNational = [
  { week: "W28", tinggi: 38, sedang: 92, rendah: 991 },
  { week: "W29", tinggi: 41, sedang: 97, rendah: 983 },
  { week: "W30", tinggi: 45, sedang: 101, rendah: 975 },
  { week: "W31", tinggi: 48, sedang: 104, rendah: 969 },
  { week: "W32", tinggi: 47, sedang: 108, rendah: 966 },
  { week: "W33", tinggi: 50, sedang: 112, rendah: 959 },
]
