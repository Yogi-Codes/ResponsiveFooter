
import truck from "../assets/truck.png"
import insta from "../assets/instagram.png"
import twitter from "../assets/twitter.png"
import fb from "../assets/fb.png"


 const LowBan = () => {





return(

<div style={{display:"flex",backgroundColor:"#F8F8F8",flexWrap:"wrap",justifyContent:"space-around",height:"30vh"}}>

<div style={{alignItems:"center",display:"flex",width:"25vw",justifyContent:"center",height:"30vh"}}>
<img src={truck} alt="truck" />

</div>
<div  style={{width:"25vw", display:"flex",justifyContent:"center",flexDirection:"column",height:"30vh"}}>
<h3 style={{color:"#0E2368"}}>Contact Us</h3>
<p>Lorem ipsum dolor sit amet consectetur, 
    adipisicing elit. Explicabo laudantium
     iusto officiis hic? Vel beatae ducimus fugit odit est pariatur excepturi quod, accusantium, similique explicabo labore reiciendis tenetur, veniam animi.</p>

</div>
<div  style={{width:"25vw", display:"flex",justifyContent:"center",flexDirection:"column",height:"30vh"}}>
<h3 style={{color:"#0E2368"}}>More</h3>
<p><a href="/" style={{color:"#646874",textDecoration:"none"}}>About Us</a></p>
<p><a href="/" style={{color:"#646874",textDecoration:"none"}}>Products</a></p>
<p><a href="/" style={{color:"#646874",textDecoration:"none"}}>Career</a></p>
<p><a href="/" style={{color:"#646874",textDecoration:"none"}}>Contact Us</a></p>

</div >
<div  style={{width:"25vw", display:"flex",justifyContent:"left",flexDirection:"column",height:"30vh"}}>
<h3 style={{color:"#0E2368"}}>Social Links</h3>
<div style={{display:"flex",flexDirection:"row"}}>
<img src={insta} style={{padding:"1vw"}} height="21px" width="21px" alt="" />
<img src={twitter} style={{padding:"1vw"}} height="21px" width="21px" alt="" />
<img src={fb} style={{padding:"1vw"}} height="21px" width="21px" alt="" />
</div>
<p style={{color:"#828B9C",padding:"2vw"}} >© 2022 Food Truck Example</p>
</div>










</div>
)




}
export default LowBan;