"use client"

import { Menu, MenuMenu,Icon,Grid,GridColumn,MenuItem, Segment, Divider } from 'semantic-ui-react'
import './topnav.css'
import "../globals.css"
import React, {useState, Component, useEffect} from 'react'
import EGO from './topnavz.module.css'
import Link from 'next/link'









export default function MenuExampleBasic (props) {
const [navd, setnavd] = useState(false)
const [mq2, setmq2]  = useState(0)
const [dcon, setdcon] = useState(false)
const [witf, setwitf] = useState()

//   const widthd = Math.max(window.screen.width, window.innerWidth);
// console.log(widthd, "the width")
// const dithd = window.innerWidth

const dgon = ()=> {
  setdcon(!dcon)
}

useEffect(()=>{
  const mq = window.matchMedia( "(max-width: 500px)" );
  setwitf(mq.matches)
console.log(mq.matches)
console.log(mq.media)


},[])
console.log(witf,"holl")

const isBrowser = () => typeof window !== "undefined"
console.log(isBrowser)



console.log(mq2,"happ")




//   const [IsColod, setIsColod] = useState(true)

// const colt = ()=> {
//   setIsColod(!IsColod)
//   console.log(IsColod)
// }

// IsColod ? console.log("false col"): console.log("real col")
const gandi = props.colts 
const gandi2 = props.colk

    return (
        <>
        
      <Menu secondary style= {witf ? {marginLeft:"30px",
       marginRight:"30px", marginTop:"26px", padding:"40px", display:"none"} : {marginLeft:"30px",
       marginRight:"30px", padding:"40px"}} className={EGO.nav}>
          
          <Link href='#'>
         <Menu.Item
          name='ENAGY'
          
          className='animate-shake
           font-bold px-200 
          text-3xl font-medium leading-tight'
        >
          
        </Menu.Item>
        </Link>
        

        <MenuMenu position='right' className='animate-fadeIn
           font-bold px-200 
          text-3xl font-medium leading-tight'
          >
        <Menu.Item
          className= 'max-w-xs transition duration-300 ease-in-out hover:scale-110 text-2xl font-medium leading-tight'

          
         onClick={gandi}
        >
         <Icon name="moon"/>
        
        </Menu.Item>
       
       <Link href="#ol">
        <Menu.Item   
          name='contact'
          
          style={{backgroundColor:"darkgray",
           transition:"ease-in-out 1s"}}
        
           className="text-2xl font-medium leading-tight
           max-w-xs transition duration-300 
          ease-in-out hover:scale-110"
        >
        </Menu.Item>
       </Link>

       <Link href="#serv">
        <Menu.Item
          name='Services'
          className="max-w-xs transition duration-300 
          ease-in-out hover:scale-110 text-2xl font-medium leading-tight"
          style={{backgroundColor:""}}
        >
        
        </Menu.Item>
      </Link>
      <Link href="#port">
        <Menu.Item
          name='Portfolio'
          className='max-w-xs transition duration-300 
          ease-in-out hover:scale-110 text-2xl font-medium leading-tight'
        >
        </Menu.Item>
        </Link>

        <Link href="#meth">
        <Menu.Item
          name='methodology'
          className='max-w-xs transition duration-300 
          ease-in-out hover:scale-110 text-2xl font-medium leading-tight'
        >
        </Menu.Item>
        </Link>
        </MenuMenu>
      </Menu>
       
       
        { witf ?
        <Grid>
        <Segment basic floated='right' style={{padding: '19px 1px 13px 15px', backgroundColor:"#88889138",width: "41%", border:"none"}}>
          <Menu fluid vertical tabular style={{height:"100%"}}>

          <Menu.Item
             style={{height:"4rem", fontSize:"1.5rem", transition:"2s ease-out 3s"}} 
            >
              ENAGY {dcon ? <Icon onClick={dgon} name='cancel' className='transition duration-300 
          ease-in-out hover:scale-110 text-2xl'></Icon> : <Icon onClick={dgon} name='bars' 
              floated="right" className='transition duration-300 
          ease-in-out hover:scale-110 text-2xl'></Icon> }
              </Menu.Item>
              
              { dcon ?
             <Segment basic className='animate-fadeIn' style={{marginTop:"0"}}>
            <Menu.Item
             style={{height:"3.0rem", fontSize:"1.5rem", transition:"ease-in-out 1s"}} 
             
        
           className="text-2xl font-medium leading-tight
           max-w-xs transition duration-300 
          ease-in-out hover:scale-110"
            >
              Contact</Menu.Item>
              <Divider/>
            <Menu.Item
              style={{height:"3.0rem", fontSize:"1.5rem", transition:"ease-in-out 1s"}} 
              className="text-2xl font-medium leading-tight
           max-w-xs transition duration-300 
          ease-in-out hover:scale-110"
              > Services
                </Menu.Item>
                <Divider/>
            <Menu.Item
              
              style={{height:"3.0rem", fontSize:"1.5rem", transition:"ease-in-out 1s"}} 
              className="text-2xl font-medium leading-tight
           max-w-xs transition duration-300 
          ease-in-out hover:scale-110"
            > Portfolio
              </Menu.Item>
              <Divider/>
            <Menu.Item
              name='links'
              style={{height:"3.9rem", fontSize:"1.5rem", transition:"ease-in-out 1s"}} 
              className="text-2xl font-medium leading-tight
           max-w-xs transition duration-300 
          ease-in-out hover:scale-110"
            > Methodology
              </Menu.Item>
                </Segment> 
                      :null}      
          </Menu>
        </Segment>
       </Grid>
         :null}
     </>

    )
  
}


