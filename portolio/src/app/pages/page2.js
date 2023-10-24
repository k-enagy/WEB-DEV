"use client"

import React, {useState, Component, useEffect} from 'react'
import { Menu, MenuMenu,Grid,
  GridColumn,GridRow,
  Icon,
  Container, 
  Segment,
  Rail} from 'semantic-ui-react'
  import ego from '../navbars/topnavz.module.css'
  import Image from 'next/image'
  import grava from '../../../public/images/grava.png'
  import ezunu from '../../../public/images/Ezunu.png'
  import vido  from '../../../public/images/videofal.png'
  import music from '../../../public/images/musicplaya.png'
import Link from 'next/link'

  export const metadata = {
    title: 'ENAGY PORTFOLIv',
    description: 'portfolio website',
  }

  const Page2 = ({variant})=>{

    const [Hover, setHover] = useState(true)
    const [Hover2, setHover2] = useState(true)
    const [Hover3, setHover3] = useState(true)
    const [Hover4, setHover4] = useState(true)
    const [witf, setwitf] = useState()
    
    const hoder = ()=> {
        setHover(false)
        return(null)}
    const hoger = ()=> {
        setHover(true)}

    const hover2 = ()=> {
        setHover2(false)}
    const hoger2 = ()=> {
            setHover2(true)}

    const hover3 = ()=> {
             setHover3(false)}
    const hoger3 = () => {
        setHover3(true)
    }
    const hover4 = ()=>{
        setHover4(false)
  }   
   const hoger4 = ()=> {
    setHover4(true)
   }      
   
   
    
   const [offset, setOffset] = useState(0);
   const [anima, setanima] = useState(false)

   useEffect(() => {
       const onScroll = () => setOffset(window.scrollY);
       // clean up code
       window.removeEventListener('scroll', onScroll);
       window.addEventListener('scroll', onScroll, { passive: true });
       
        
       return () => window.removeEventListener('scroll', onScroll);

         

   }, []);

   
         

    
    
    useEffect(()=>{
      const mq = window.matchMedia( "(max-width: 500px)" );
      setwitf(mq.matches)
    console.log(mq.matches)
    console.log(mq.media)
    
    
    },[])

    return(
        <>
        <Container id="port">
          <Grid style={witf ? {marginTop:"50px", display:"none"}:null} className={ego.porti}>
         <Segment className={ego.porti3} style={{fontSize:"3rem", 
         fontWeight:"bold", fontFamily:"Trebuchet MS", color:"#646974", 
         textDecoration:"underline", marginLeft:"29rem"}} basic>Recent works</Segment>
    <Grid.Row style={{paddingBottom:"11rem"}} className={ego.dlast}>
      <Grid.Column width={8}  className={ego.porti2}>
        <Link href='https://6512b82326684b007f0be068--startling-croissant-3eff8c.netlify.app/'>
        <Segment  basic><Image src={grava} /></Segment>
        </Link>
      </Grid.Column>
      <Grid.Column width={8} className={ego.porti2}>
        <Link href='https://ezunu.onrender.com/'>
        <Segment basic><Image src={ezunu}></Image></Segment>
        </Link>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row style={{paddingBottom:"10rem"}} className={ego.dlast}>
      <Grid.Column width={8} className={ego.porti2}>
        <Link href=''>
        <Segment basic><Image src={vido}></Image></Segment>
        </Link>
      </Grid.Column>
      <Grid.Column width={8} className={ego.porti2}>
        <Link href="https://vybex.netlify.app/">
        <Segment basic><Image src={music}></Image></Segment>
        </Link>
      </Grid.Column>
    </Grid.Row>
  </Grid>


{witf ?
<Grid>
  <GridRow>
    <GridColumn>
    <Segment className={ego.porti3} style={{fontSize:"3rem", 
         fontWeight:"bold", fontFamily:"Trebuchet MS", color:"#646974", 
         textDecoration:"underline", marginLeft:"29rem"}} basic>Recent works</Segment>
   
      <Link href='https://6512b82326684b007f0be068--startling-croissant-3eff8c.netlify.app/'>
        <Segment  ><Image src={grava} /></Segment>
        </Link>

        <Link href='https://ezunu.onrender.com/'>
        <Segment basic><Image src={ezunu}></Image></Segment>
        </Link>
        
        <Link href=''>
        <Segment basic><Image src={vido}></Image></Segment>
        </Link>
           
        <Link href="https://vybex.netlify.app/">
        <Segment basic><Image src={music}></Image></Segment>
        </Link>
        </GridColumn>
  </GridRow>
</Grid> :null}
    

  <Grid id="meth" style={ witf ? {marginTop:"50px", display:"none"} : null} >
      
      <Grid.Column  className={ego.col3} width={7}>
      <Segment basic className='animate-jumpLeft px-400 
          text-8xl font-bold leading-tight' style={{marginLeft:"1rem",padding:"30px", backgroundColor:"#0a02020d",
           borderRadius:"9px"}}>
            <div style={{fontSize:"2rem", fontWeight:"bold", color:"#24245c"}} >
            Work process & methods <Icon name='arrow right'color='green' style={{marginLeft:"6rem"}}></Icon></div>
            </Segment>
      </Grid.Column>
      


      <Grid.Column  className={ego.hovn} width={7}>
         
        <Segment basic style={Hover ?
         {padding:"3rem",
         borderRadius:"2rem",
        transition:"ease-in 0.5s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 0.5s"}}
            onMouseOut={hoger} onMouseOver={hoder}> 

        <div style={{fontSize:"1.9rem", fontWeight:"bold", color:"#24245c"}}>Research phase</div>

        <div style={{paddingTop:"10px"}}> During this stage, 
            I immerse myself in your realm to gain a profound understanding of you.
             Prior to crafting your high-performing website,
              it's crucial for me to comprehend your needs, challenges, and target audience.
         </div>
        </Segment>
          

        <Segment basic style={Hover2 ?
         {padding:"3rem",
         borderRadius:"2rem",
        transition:"ease-in 1s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 1s"}}
            onMouseOut={hoger2} onMouseOver={hover2}>
             <div style={{fontSize:"1.9rem", fontWeight:"bold", color:"#24245c"}}>
            Design phase</div>
             <div  style={{paddingTop:"10px"}}>
            I utilize the knowledge I've gathered about you to create a customized website 
            that perfectly aligns with your specific requirements.
             This ensures that your brand is authentically represented,
              while also maintaining an appealing and user-friendly design for your audienc
            </div>
            </Segment>

        <Segment basic style={Hover3?
         {padding:"3rem",
         borderRadius:"2rem",
        transition:"ease-in 1s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 1s"}}
         onMouseOver={hover3} onMouseOut={hoger3}>
            <div style={{fontSize:"1.9rem", fontWeight:"bold", 
         color:"#24245c"}}>
            Development</div>
            <div style={{paddingTop:"10px"}} >
            After you've approved the designs,
             I will move forward with the development phase,
              ensuring that everything is optimized according to contemporary web standards,
             including aspects like speed, security, and dependability.
            </div>
            </Segment>
        <Segment basic style={Hover4 ?
         {padding:"3rem",
         borderRadius:"2rem",
        transition:"ease-in 1s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 1s"}}
         onMouseOut={hoger4} onMouseOver={hover4}>
            <div style={{fontSize:"1.9rem", fontWeight:"bold", 
         color:"#24245c"}}>
            Deployment</div>
            <div style={{paddingTop:"10px"}}>
            After I’ve completed the build and double checked everything alongside your approval,
             it’s time to launch your website.
              In this phase I will also provide some training 
              videos on how you can add content to your website
               so you can do it yourself.
            </div>
            </Segment>
      </Grid.Column>
  
  </Grid>

 { witf ?

  <Grid >
    <GridRow>
      <GridColumn>
      <Segment basic className='animate-jumpLeft px-400 
          text-8xl font-bold leading-tight' style={{marginLeft:"1rem",padding:"30px", backgroundColor:"#0a02020d",
           borderRadius:"9px"}}>
            <div style={{fontSize:"2rem", fontWeight:"bold", color:"#24245c"}} >
            Work process & methods <Icon name='arrow right'color='green' style={{marginLeft:"6rem"}}></Icon></div>
            </Segment>

            <Segment basic style={Hover ?
         {padding:"3rem",
         borderRadius:"2rem", marginRight:'1rem',
        transition:"ease-in 0.5s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem", 
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 0.5s"}}
            onMouseOut={hoger} onMouseOver={hoder}> 

        <div style={{fontSize:"1.9rem", fontWeight:"bold", color:"#24245c"}}>Research phase</div>

        <div style={{paddingTop:"10px"}}> During this stage, 
            I immerse myself in your realm to gain a profound understanding of you.
             Prior to crafting your high-performing website,
              it's crucial for me to comprehend your needs, challenges, and target audience.
         </div>
        </Segment>

        <Segment basic style={Hover2 ?
         {padding:"3rem",
         borderRadius:"2rem", marginRight:"1rem",
        transition:"ease-in 1s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 1s"}}
            onMouseOut={hoger2} onMouseOver={hover2}>
             <div style={{fontSize:"1.9rem", fontWeight:"bold", color:"#24245c"}}>
            Design phase</div>
             <div  style={{paddingTop:"10px"}}>
            I utilize the knowledge I've gathered about you to create a customized website 
            that perfectly aligns with your specific requirements.
             This ensures that your brand is authentically represented,
              while also maintaining an appealing and user-friendly design for your audienc
            </div>
            </Segment>

        <Segment basic style={Hover3?
         {padding:"3rem",
         borderRadius:"2rem",marginRight:'1rem',
        transition:"ease-in 1s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 1s"}}
         onMouseOver={hover3} onMouseOut={hoger3}>
            <div style={{fontSize:"1.9rem", fontWeight:"bold", 
         color:"#24245c"}}>
            Development</div>
            <div style={{paddingTop:"10px"}} >
            After you've approved the designs,
             I will move forward with the development phase,
              ensuring that everything is optimized according to contemporary web standards,
             including aspects like speed, security, and dependability.
            </div>
            </Segment>

            <Segment basic style={Hover4 ?
         {padding:"3rem",
         borderRadius:"2rem", marginRight:'1rem',
        transition:"ease-in 1s", backgroundColor:"#adadc417"} :
         {padding:"3rem", borderRadius:"2rem",
          backgroundColor:"white",boxShadow:"0px -12px 20px 0px darkgrey",
           transition:"ease-out 1s"}}
         onMouseOut={hoger4} onMouseOver={hover4}>
            <div style={{fontSize:"1.9rem", fontWeight:"bold", 
         color:"#24245c"}}>
            Deployment</div>
            <div style={{paddingTop:"10px"}}>
            After I’ve completed the build and double checked everything alongside your approval,
             it’s time to launch your website.
              In this phase I will also provide some training 
              videos on how you can add content to your website
               so you can do it yourself.
            </div>
            </Segment>

      </GridColumn>
    </GridRow>
  </Grid>
   : null}
  </Container>
        </>
    )
  }
  export default Page2
