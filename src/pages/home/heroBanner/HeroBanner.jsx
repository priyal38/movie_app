import React , {useEffect, useState} from 'react'
import './style.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/Wrapper/ContentWrapper';



const HeroBanner = () => {
const [background , setBackground] = useState("");
const [query,setQuery] = useState("");
const navigate = useNavigate();

const { url } = useSelector((state)=>state.home)


const {data , loading} = useFetch("/movie/upcoming")

useEffect(()=>{
    
const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)].backdrop_path;
setBackground(bg);
},[data])

const searchQueryHandler = (event) => {
if(event.key === "Enter" && query.length > 0){
navigate(`/search/${query}`)
}
}

  return (
   <div className="herobanner">

   { !loading && <div className="backdrop-img">
        <Img src={background} />
    </div>}

    <div className="opacity-layer">

    </div>

    <ContentWrapper>
     <div className="herobannercontent">
            <span className="title"> Welcome. <br/>
            </span>
            <span className="subTitle">
                Millions of movies, TV shows and People to discover.<br/>
                Explore now.
            </span>
            <div className="searchInput">
                <input
                type = "text"
                placeholder='Search for a movie or Tv show......'
                onChange={(e)=>setQuery(e.target.value) }
                onKeyUp={searchQueryHandler}
                />
                <button>Search</button>
            </div>
        </div>
    
    </ContentWrapper>
   </div>
  )
}

export default HeroBanner