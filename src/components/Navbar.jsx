export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <nav className="navbar">
        <div className="nav-left">
          <span className="logo">Mood Location Finder</span>
        </div>

        <div className="nav-right">
          <a href="#">ติดต่อ</a>
          <a href="#">ผู้ใช้</a>

          <button className="btn-login">เข้าสู่ระบบ</button>
          <button className="btn-register">สมัครสมาชิก</button>
        </div>
      </nav>
    </header>
  )
}
