import { Featured } from "@/components/home/featured/featured";
import { Hero } from "@/components/home/hero/hero";
import { Main } from "@/components/home/main/main";
import { Newsletter } from "@/components/home/newsletter/newsletter";
import { Footer } from "@/components/footer/footer";
import { CategoriesB } from "@/components/home/categories/caterories";

export default function Home() {
  return (
    <div>
      <Main />
      <CategoriesB />
      <Featured />
      <Hero />
      <Newsletter />
      <Footer />
    </div>
  )
}
