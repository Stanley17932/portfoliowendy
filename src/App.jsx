import { BrowserRouter, Routes, Route } from "react-router-dom"
import Portfolio from "./components/Portfolio"
import SitemapPage from "./components/SitemapPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App