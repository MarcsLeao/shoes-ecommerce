import { ButtonBorderYellow } from "@/components/buttons/buttons";
import { Nav } from "../../nav/nav";
import Link from "next/link";

export function Main() {
    return (
            <main className="h-screen bg-cover bg-center bg-[url('https://media.ebony.com/sytwmfsyue/uploads/2024/01/25/GettyImages-1939409957.jpg')] ">
                <Nav />
                <div className="h-[100%] px-12 flex flex-col gap-4 items-start justify-center">
                    <div className="flex flex-col gap-4 items-start">
                        <h1 className="font-bold text-6xl text-white" style={{ textShadow: "5px 5px 0px #18181b" }}>Your Footwear</h1>
                        <p className="text-xl text-white" style={{ textShadow: "1px 1px 0px #18181b" }}>Stylish, Modern, Comfy, the best here u can find.</p>
                        <Link href={'/shoes'}>
                            <ButtonBorderYellow text="SEE PRODUCTS"/>
                        </Link>
                    </div>
                </div>
            </main>
    )
}