import Link from "next/link"
import Image from "next/image"

const DoctorResultCard = ({ name, field }) => {
  return (
    <div className="rounded-lg bg-slate-500 shadow-md  dark:text-gray-100">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <Image alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-white style-bold">{name}</h3>
            <p className="text-white">{field}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end p-4">
        <Link href="/pages/doctors/1">
          <button className="btn text-white" size="sm" variant="link">
            View Profile
          </button>
        </Link>
      </div>
    </div>
  )
}

export default DoctorResultCard