import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "@/lib/theme"
import Landing from "@/pages/Landing"
import WaliAsuhDashboard from "@/pages/wali-asuh/Dashboard"
import Pemantauan from "@/pages/wali-asuh/Pemantauan"
import KmsChat from "@/pages/wali-asuh/KmsChat"
import Simulasi from "@/pages/wali-asuh/Simulasi"
import Monitoring from "@/pages/kemensos/Monitoring"
import Ahp from "@/pages/kemensos/Ahp"
import KnowledgeBase from "@/pages/kemensos/KnowledgeBase"

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wali-asuh" element={<WaliAsuhDashboard />} />
          <Route path="/wali-asuh/pemantauan" element={<Pemantauan />} />
          <Route path="/wali-asuh/kms" element={<KmsChat />} />
          <Route path="/wali-asuh/simulasi" element={<Simulasi />} />
          <Route path="/kemensos" element={<Monitoring />} />
          <Route path="/kemensos/ahp" element={<Ahp />} />
          <Route path="/kemensos/knowledge-base" element={<KnowledgeBase />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
