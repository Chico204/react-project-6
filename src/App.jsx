
import React, { useState, useEffect } from "react";

const companies = [
  {
    id: "TOMMY",
    title: "Full Stack Web Developer",
    company: "TOMMY",
    date: "December 2015 - Present",
    bullets: [
      "Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra.",
      "Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation.",
      "Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy."
    ]
  },
  {
    id: "BIGDROP",
    title: "Frontend Developer",
    company: "BIGDROP",
    date: "August 2014 - December 2015",
    bullets: [
      "Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.",
      "Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1",
      "Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1"
    ]
  },
  {
    id: "CUKER",
    title: "Junior Developer",
    company: "CUKER",
    date: "May 2013 - August 2014",
    bullets: [
       "I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.",
      "YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.",
      "Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism."
    ]
  }
];

export default function App() {
 const [active, setActive] = useState(companies[0].id)
 const [loading, setLoading] = useState(true)
  
 useEffect(() => {
  const timer = setTimeout(()=> setLoading(false), 1500)
  return () => clearTimeout(timer)
 },[])
 if (loading){
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
    </div>
  )
 }

const activeCompany = companies.find((c) => c.id === active)
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex">
      <div className="w-1/4 pr-8 ">
        {companies.map((company)=> (
          <button key={company.id} onClick={()=> setActive(company.id)} className={`block mb-4 text-left font-medium text-lg ${active === company.id ? "text-teal-500 border-l-4 border-teal-500 pl-2" : "text-black hover:text-teal-500"}`}>
       {company.id}
          </button>
        ))}
      </div>
    </div>
  );
}
