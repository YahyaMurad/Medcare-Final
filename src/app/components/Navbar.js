import Link from "next/link"

const Navbar = () => {
  return (
    <header className="bg-gray-900 text-white py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Link className="text-2xl font-bold" href="/">
          MedCare
        </Link>
        <nav className="flex items-center gap-6">
          <Link className="transition-all hover:text-slate-400" href="/pages/search">
            Find Doctors
          </Link>
          <Link className="transition-all hover:text-slate-400" href="#">
            My Appointments
          </Link>
          <Link className="transition-all hover:text-slate-400" href="/pages/medical_records">
            Medical Records
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-slate-500 hover:bg-slate-600 inline-flex btn text-white" variant="outline">
          Sign In
        </button>
        <button className="btn btn-neutral text-white">Sign Up</button>
      </div>
    </header>
  )
}

export default Navbar