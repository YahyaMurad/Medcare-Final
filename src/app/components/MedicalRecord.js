import Link from "next/link"
import Image from "next/image"

const MedicalAppointment = ({ name, field, date, isTest }) => {
  return (
    <div className="flex items-center gap-7 justify-between">
      {isTest ? (
        <></>
      ) : (
        <div class="avatar">
          <div class="w-12 rounded-full">
            <Image alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>
      )}
      <div>
        <h4 className="text-slate-800 font-bold">{name}</h4>
        <p className="text-black">{field}</p>
        <p className="text-black">{date}</p>
      </div>
      <Link href="/pages/medical_records">
        <button className="btn btn-sm text-white">Details</button>
      </Link>
    </div>
  )
}

export default MedicalAppointment