import Image from "next/image"

const Review = () => {
  return (
    <div className="flex items-start space-x-4">
      <div class="avatar">
        <div class="w-16 rounded-full">
          <Image alt="image" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <div>
        <div className="flex items-center space-x-2">
          <div class="rating">
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" />
            <input type="radio" name="rating-1" class="mask mask-star bg-amber-300" checked />
          </div>
          <p className="text-sm font-medium text-slate-700">5.0</p>
        </div>
        <p className="text-sm text-gray-700">John Doe - 1 week ago</p>
        <p className="mt-2 text-black">
          Aute in nisi est nulla do aliqua commodo fugiat. Ipsum anim non laborum aliquip ex laboris incididunt ea aliqua enim. Consectetur esse enim ut veniam. Eiusmod nulla minim ex laboris dolore laboris sunt eiusmod dolore veniam. Occaecat voluptate amet non ea cillum sunt est in pariatur voluptate sunt esse enim. Duis ea et aute consectetur cillum nostrud labore quis laboris minim.
        </p>
      </div>
    </div>
  )
}

export default Review