import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/about";
import Hero from "@/components/hero";
import OurSkill from "@/components/ourSkill";
import Projects from "@/components/projects";
import Service from "@/components/service";



export default function Home() {
  return (
     <main> 
      <Hero></Hero>
      <About></About>
      <OurSkill></OurSkill>
      <Service></Service>
      <Projects></Projects> 
     </main>
  )
}
