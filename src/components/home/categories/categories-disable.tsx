
export function Categories() {
    return (
        <section className="px-12 py-9">
            <h1 className="font-bold text-4xl mb-8">Categories</h1>
            <div className="flex flex-col lg:h-[700px] justify-between gap-12 lg:flex-row">
                <CategorieCard url="https://cdn.shopify.com/s/files/1/0567/9228/5337/files/tenis-branco-no-modelo-feminino_1_1024x1024.jpg?v=1696591027"/>
                <CategorieCard url="https://img.freepik.com/fotos-gratis/equipe-sapatas-que-funcionam-no-asfalto-com-o-ceu-no-fundo_1301-4163.jpg?t=st=1741024426~exp=1741028026~hmac=627736522ed6bdfd4d05ff2b6bf42d3627155bdf493289ce86a43825c7d7a0a5&w=740"/>
                <CategorieCard url="https://images.unsplash.com/photo-1615290643058-fcf564c714cc?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            </div>
        </section>
    )
}

export function CategorieCard({url}: {url: string}) {
    return (
        <div className="overflow-hidden w-full lg:max-w-[450px] h-[150px] sm:min-h-[300px] lg:h-[700px] rounded-lg">
            <img 
                src={url}
                alt="shoes model image"
                className="w-full h-full object-cover"
            />
        </div>
    )
}