import React , {useState} from 'react'
import ContentWrapper from '../../../components/Wrapper/ContentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const TopRated = () => {
    const [endpoint , setEndpoint] = useState("movie")
const {data , loading} = useFetch(`/${endpoint}/top_rated`)
    const onTabChange = (tab) => {
 setEndpoint(tab === "Movies" ?"movie" :"tv")
    }

  return (
    <div className='carouseSection'>
        <ContentWrapper>
            <span className="carouseTitle">Top Rated</span>
            <SwitchTab data={["Movies" ,"TV Shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading={loading} endpoint={endpoint}/>

    </div>
  )
}

export default TopRated