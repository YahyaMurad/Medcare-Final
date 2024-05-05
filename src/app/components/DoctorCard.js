import Link from "next/link"
import Image from "next/image"

const DoctorCard = ({ id, name, field, content }) => {
  return (
    <div className="card w-96 bg-slate-200 shadow-xl">
      <div className="card-body">
        <div className="flex items-center gap-4">
          <div class="avatar">
            <div class="w-16 rounded-full">
              <Image alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex flex-col text-black">
            <h2 className="card-title">{name}</h2>
            <h2 className="card-subtitle">{field}</h2>
          </div>
        </div>
        <div>
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" checked />
          </div>
          <div className="text-black">
            <p>{content}</p>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link href={`/pages/doctors/${id}`}>
            <button className="btn btn text-white">View Profile</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default DoctorCard