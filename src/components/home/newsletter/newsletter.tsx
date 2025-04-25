import { ButtonBorderBlack } from "@/components/buttons/buttons";

export function Newsletter() {
    return(
        <section className="bg-yellow-300 h-[180px] px-12">
            <div className="h-full flex flex-col md:flex-row gap-6 md:gap-12 justify-center items-center">
                <h1 className="font-bold text-3xl md:hidden text-center">Get <span className="underline decoration-1 underline-offset-2">cuppons</span> and <span className="underline decoration-1 underline-offset-2">free</span> shipping.</h1>
                <h1 className="font-bold text-3xl hidden md:inline-block">Assign our membership plan for <span className="underline decoration-1 underline-offset-2">cuppons</span> and <span className="underline decoration-1 underline-offset-2">free shipping</span>.</h1>
                <ButtonBorderBlack text='ASSIGN NOW'/>
            </div>
        </section>
    )
}