import { Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Chapter(){
    const [details,setDetails] = useState([])
    const loc = useLocation(); 
    const search = async(id) =>{
        const req = await axios.get(`https://api.consumet.org/manga/mangasee123/read?chapterId=${id}`)
        setDetails(req.data)
    }
    console.log(details)
    if(loc.state)
    {
        const id=loc.state.id
        useEffect(()=>{search(id)},[])
        return(
        <>
        {
            details.length!=0?(
                details.map((i)=><img src={i.img} width='100%'/>)
            ):<h1></h1>
        }
        </>
        )
    }
    else
    return <Navigate to='/' />
}
