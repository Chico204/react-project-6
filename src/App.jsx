
import React, { useState, useEffect } from "react";
import {companies} from "./data";


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
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-teal-500"></div>
    </div>
  )
 }

const activeCompany = companies.find((c) => c.id === active)
  return (
    <div className="min-h-screen bg-gray-100 p-8 flex">
      <div className="w-1/4 pr-8 ">
        {companies.map((company)=> (
          <button key={company.id} onClick={()=> setActive(company.id)} className={`block mb-4 text-left font-medium text-lg ${active === company.id ? "text-teal-500 border-l-4  border-teal-500 pl-2" : "text-black hover:text-teal-500"}`}>
       {company.id}
          </button>
        ))}
      </div>

      <div className="w-3/4 pl-8">
        <h1 className="text-3xl font-bold">{activeCompany.title}</h1>
        <span className="inline-block bg-gray-400 mt-2 px-4 py-1 rounded text-gray-800 mb-2">{activeCompany.company}</span>
        <p className="text-gray-600 mb-6">{activeCompany.date}</p>
        <ul className="space-y-4">
          {activeCompany.bullets.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-teal-500 text-xl">» </span>
              <p className="text-gray-800">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
