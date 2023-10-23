"use client"

import './globals.css'
import 'semantic-ui-css/semantic.min.css';
import MenuExampleBasic from './navbars/topnav';
import React, {useState, Component, useEffect} from 'react'
import { Button } from 'semantic-ui-react';
import EGO from './navbars/topnavz.module.css'



export default function RootLayout({ children }) {
 
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
 
  const [IsColod, setIsColod] = useState(false)

  const colt = ()=> {
    setIsColod(!IsColod)
    console.log(IsColod)
  }
  
  IsColod ? console.log("false col"): console.log("real col")

  return (
    
    <html lang="en" className={EGO.witf}>
    <body  style={IsColod ? {backgroundColor:"#2a2a2fc9"} : null} >
      <MenuExampleBasic  colts={colt} colk={IsColod}/>
      
      {children}
      <button
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 2rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
          borderRadius:"10px"
        }}
      >
        Scroll to top
      </button>
      </body>
    </html>
    
  )
}
