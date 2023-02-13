import { Link, Navigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
export default function Info(){
    const [details,setDetails] = useState([])
    const loc = useLocation(); 
    const search = async(id) =>{
        const req = await axios.get(`https://api.consumet.org/manga/mangasee123/info?id=${id}`)
        setDetails(req.data)
    }
    if(loc.state)
    {
    const id=loc.state.id
    useEffect(()=>{search(id)},[])
    console.log(details.chapters)
    return(
    <div className="info">
    <div className="content">
    <img className='cover-img' src={details.image}/>
    <div className="desc">
        <h2>{details.title}</h2>
    <p>{details.description}</p>
    <dir className='genre'><b>Genres:</b>
    {
        
        details.length!=0?(
            details.genres.map((i)=>
        <div className="genre">{i}</div>
        )
        ):<h1></h1>
    }    
    </dir>
    </div>
    </div>
    <div className="chapters-list">
    {
        
        details.length!=0?(
            details.chapters.map((i)=>
        <div className="chapters">
        <Link to='/chapter' state={{id:i.id}}>
        <p>{i.id.split(details.id+"-")}</p></Link>
        </div>
        )
        ):<h1></h1>
    }
    </div>
    </div>
    )
    }
    else
    return <Navigate to='/' />
}
