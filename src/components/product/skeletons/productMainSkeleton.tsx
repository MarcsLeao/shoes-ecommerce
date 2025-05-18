import { Footer } from "@/components/footer/footer";
import { FeaturedSkeleton } from "@/components/home/skeletons/featuredSkeleton";
import { PageNavigationBar } from "@/components/nav/generic";
import { Nav } from "@/components/nav/nav";

export function ProductMainSkeleton() {
  return (
    <section>
        <Nav />
        <PageNavigationBar />

        <section className="h-[650px] grid grid-cols-[3fr,1fr] p-6">
            {/* Imagem do produto */}
            <div className="border-r-2 border-gray-300">
                <div className="px-4">
                    <div className="w-full h-[650px] bg-gray-200 animate-pulse rounded-xl" />
                </div>
            </div>

            {/* Detalhes do produto */}
            <div className="p-4 flex flex-col justify-between items-start">
                <div className="flex flex-col gap-4 w-full">
                    {/* Título */}
                    <div className="h-6 w-2/3 bg-gray-300 rounded animate-pulse" />

                    {/* Preço */}
                    <div className="h-5 w-1/4 bg-gray-300 rounded animate-pulse" />

                    {/* Descrição */}
                    <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
                        <div className="h-4 w-3/4 bg-gray-200 rounded animate-pulse" />
                    </div>

                    {/* Tamanhos */}
                    <div>
                    <div className="h-5 w-32 bg-gray-300 rounded animate-pulse mb-2" />
                        <div className="grid grid-cols-[40px,40px,40px,40px] gap-4">
                            {Array.from({ length: 4 }).map((_, i) => (
                                <div key={i} className="w-10 h-10 bg-gray-300 rounded-lg animate-pulse"/>
                            ))}
                        </div>
                    </div>

                    {/* Cores */}
                    <div>
                        <div className="h-5 w-20 bg-gray-300 rounded animate-pulse mb-2" />
                        <div className="grid grid-cols-[70px] gap-4">
                            <div className="w-[70px] h-[70px] bg-gray-300 rounded-lg animate-pulse" />
                        </div>
                    </div>
                </div>

                {/* Botão e texto */}
                <div className="flex flex-col items-start gap-4 w-full">
                    <div className="w-full h-10 bg-gray-300 rounded animate-pulse" />
                    <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
                </div>
            </div>
        </section>

        <FeaturedSkeleton />
        <Footer />
    </section>
  )
}
