import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 flex items-center justify-between">
      <p className="text-sm">&#169; 2024 MedCare. All rights reserved.</p>
      <nav className="hidden md:flex items-center gap-6">
        <Link className="transition-all hover:text-slate-400" href="#">
          Privacy Policy
        </Link>
        <Link className="transition-all hover:text-slate-400" href="#">
          Terms of Service
        </Link>
        <Link className="transition-all hover:text-slate-400" href="/pages/contact">
          Contact Us
        </Link>
      </nav>
    </footer>
  )
}

export default Footer