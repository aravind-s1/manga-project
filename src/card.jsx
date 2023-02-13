import { Link } from "react-router-dom";
const Card = ({details}) =>{
    return (
        <>
        <div className='card' >
        <Link to='/info' state={{id:details.id}}>
        <div>
            <img className='cover-img' src={details.image} alt={details.title.userPreferred}/>
        </div>
        <div className="name">
            <h4>{details.title.length<15?details.title:details.title.slice(0,15)+'....'}</h4>    
        </div>
    </Link>
    </div>
    </>
    );
}
export default Card