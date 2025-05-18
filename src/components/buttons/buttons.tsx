import { FaArrowRightLong } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
 
export function ButtonHome1() {
    return (
        <button className="bg-yellow-300 py-4 px-7 font-bold text-sm tracking-widest">SEE PRODUCTS <FaArrowRightLong className="inline-block ml-2"/></button>
    )
}

export function ButtonHome2({text}: {text: string}) {
    return (
        <button className="bg-zinc-900 text-white py-4 px-7 font-bold text-sm tracking-widest">{text} <FaArrowRightLong className="inline-block ml-2"/></button>
    )
}

export function ButtonBasicYellow({text}: {text: string}) {
    return (
        <button className="bg-yellow-300 w-full md:w-max text-zinc-900 py-4 px-7 font-semibold text-sm tracking-widest hover:textasd-zinc-700 hover:bg-yellow-200 transition-colors">{text}</button>
    )
}

export function ButtonBuyProduct({typeSubmit}: {typeSubmit: boolean}) {
    return (
        <button type={typeSubmit ? 'submit' : 'button'} className="w-full md:w-max bg-zinc-900 text-white flex justify-center items-center gap-3 rounded-full py-4 px-7 font-bold text-sm tracking-widest transition-colors duration-300 group">
          <span>Buy Now</span>
          <FiArrowUpRight className="inline-block bg-white rounded-full p-1 text-2xl text-zinc-900 ml-2 transition-colors duration-300 group-hover:bg-yellow-400" />
        </button>
      )
}

export function ButtonCategoryCard() {
    return (
        <div className="absolute left-[50%] top-[90%]">
            <button className="group flex justify-center items-center gap-2 px-4 py-2 w-max bg-zinc-900 text-white rounded-full">
                buy now
                <FiArrowUpRight className="inline-block text-lg bg-white group-hover:bg-yellow-300 px-[2px] rounded-full text-zinc-900 transition-colors"/>
            </button>
        </div>
    )
}

export function ButtonBorderBlack({text}: {text: string}) {
    return (
        <button className="relative z-10 flex items-center justify-center px-8 py-4 font-medium uppercase tracking-widest text-white bg-black border border-black transition-transform duration-300 before:absolute before:inset-0 before:-z-10 before:border before:border-black before:translate-x-[4px] before:translate-y-[4px] before:transition-transform before:duration-300 hover:before:translate-x-[-1px] hover:before:translate-y-[-1px] hover:text-gray-300">
            {text} <FaArrowRightLong className="ml-4"/>
      </button>
    )
}

export function ButtonBorderYellow({text}: {text: string}) {
    return (
        <button className="relative z-10 flex items-center justify-center px-8 py-4 font-medium uppercase tracking-widest text-zinc-900 bg-yellow-300 border border-yellow-300 transition-transform duration-300 before:absolute before:inset-0 before:-z-10 before:border before:border-yellow-300 before:translate-x-[4px] before:translate-y-[4px] before:transition-transform before:duration-300 hover:before:translate-x-[-1px] hover:before:translate-y-[-1px] hover:text-zinc-800">
            {text} <FaArrowRightLong className="ml-4"/>
      </button>
    )
}

export function ButtonClose({buttonFn}: {buttonFn: () => void}) {
    return (
        <button onClick={buttonFn} className="text-xl hover:bg-red-500 hover:text-white transition-colors rounded-lg p-1">
            <IoClose />
        </button>
    )
}