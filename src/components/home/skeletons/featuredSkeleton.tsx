import { SectionTitle } from "../generic/generic";

export function FeaturedSkeleton() {
    return (
        <section className="px-8 sm:px-12 py-12">
            <SectionTitle title="Featured" />
                <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth whitespace-nowrap py-2">
                    {Array.from({ length: 7 }).map((_, i) => (
                        <div key={i} className="w-[200px] sm:w-[250px] h-[300px] bg-gray-200 rounded-xl animate-pulse flex-shrink-0 snap-start">
                            <div className="h-2/3 bg-gray-300 rounded-t-xl" />
                            <div className="p-4 space-y-2">
                                <div className="h-4 bg-gray-300 rounded w-3/4" />
                                <div className="h-4 bg-gray-300 rounded w-1/2" />
                            </div>
                        </div>
                    ))}
                </div>
        </section>
    )
}
