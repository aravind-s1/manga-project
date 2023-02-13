import { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'
import logo from './assets/logo.png'
function Home(){
    const [start,setStart]=useState(true)
    const [searchtext, setSearchtext] = useState()
    const [details,setDetails] = useState([])
    useEffect(
      ()=>{setStart(true)},[])
  const onchange = async(e) =>{
  setSearchtext(e.target.value)
  }
  const search= ()=>{
  axios.get(`https://api.consumet.org/manga/mangasee123/${searchtext}`).then((res)=>{
    setDetails(res.data.results)
    setStart(false)
  })
  }

return (
  <>
  <input type="text" name="search" onChange={onchange}/>
  <button onClick={search}><span>search</span></button>
  <div className='m-container'>
  {
    start?<h1></h1>:
    (
      details.length==0?<h1></h1>:details.map((i)=><Card details={i}/>)
    )
  }
  </div>
  </>
)
}
export default Home
