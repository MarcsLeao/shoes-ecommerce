import { Footer } from "@/components/footer/footer";
import { PageNavigationBar } from "@/components/nav/generic";
import { Nav } from "@/components/nav/nav";

export function ShoesMainSkeleton() {
    return (
        <>
            <Nav />
            <PageNavigationBar />
            <section>
                <div className="hidden sm:flex justify-start items-center gap-4 px-12 py-4">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="h-16 w-36 bg-gray-300 rounded-lg animate-pulse" />
                    ))}
                </div>

                <div className="flex sm:hidden justify-between items-center px-4 py-2">
                    {[1, 2].map((item) => (
                        <div key={item} className="h-10 w-24 bg-gray-300 rounded-full animate-pulse" />
                    ))}
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-4 sm:px-12 py-4">
                    {Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="h-64 bg-gray-300 rounded-lg animate-pulse" />
                    ))}
                </div>

                <div className="flex justify-center items-center gap-4 mb-2">
                    <div className="h-10 w-24 bg-gray-300 rounded-full animate-pulse" />
                    <div className="h-10 w-24 bg-gray-300 rounded-full animate-pulse" />
                </div>
            </section>
            <Footer />
        </>
    )
}