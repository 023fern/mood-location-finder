import Navbar from "../components/Navbar"
import MoodSelector from "../components/MoodSelector"
import SearchBar from "../components/SearchBar"
import ProvinceSlider from "../components/ProvinceSlider"

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <h1 className="title">เลือกอารมณ์ของคุณ</h1>

        <MoodSelector />

        <p className="or">หรือ</p>

        <SearchBar />

        <h2 className="subtitle">จังหวัดที่คุณอยู่ตอนนี้</h2>

        <ProvinceSlider />
      </main>

      <footer className="footer">
        © 2026 Mood Location Finder
      </footer>
    </div>
  )
}
