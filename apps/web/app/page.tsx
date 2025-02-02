import ReviewSection from "@utils/components/self/reviewSection"
import Navbar from "../useCases/Layout/navbar"
import Hero from "useCases/Layout/Hero"
export default function Page(){
  return (
    <>
    <div className="inset-0 min-h-screen flex flex-col items-center">
    <Navbar/>
    <div className="inset-0 text-center min-h-screen flex items-center justify-center ">
      
      <Hero></Hero>
    </div>
    <ReviewSection></ReviewSection>
    </div>
    </>
  )
} 