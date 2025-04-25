import ShoesMain from "@/components/shoes/main/main";

export default function ShoesPage({searchParams} : {searchParams: { [key: string]: string | string[] | undefined }}) {
    return (
        <ShoesMain searchParams={searchParams}/>
    )
}