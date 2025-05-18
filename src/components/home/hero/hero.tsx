import { ButtonBorderYellow } from "@/components/buttons/buttons";
import Link from "next/link";

export function Hero() {
    return (
        <section className="bg-zinc-900 w-full h-[710px] px-12 bg-[url('https://img.freepik.com/fotos-gratis/garotos-completos-sentados-juntos_23-2149241595.jpg?t=st=1741023655~exp=1741027255~hmac=af38265bdde5a252fe9f730e8e5e9132f179de6bb7b6d8b53e75b5e7e3a42d99&w=1060')] bg-cover bg-center">
            <div className="h-full flex flex-col sm:flex-row gap-8 sm:gap-0 justify-center sm:justify-between items-center">
                <h1
                 className="text-white text-center sm:text-start font-bold text-5xl"
                 style={{ textShadow: "5px 5px 0px #18181b" }}
                >
                    Selected <span className="text-yellow-300">Brands</span> <br /> in one place
                </h1>
                <Link href={'/shoes'}>
                    <ButtonBorderYellow text="SEE PRODUCTS"/>
                </Link>
            </div>
        </section>
    )
}