import React , {useState} from 'react'
import ContentWrapper from '../../../components/contentwrapper/COntentWrapper'
import SwitchTab from '../../../components/switchTabs/SwitchTab'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'

const Trending = () => {
    const [endpoint , setEndpoint] = useState("day")
const {data , loading} = useFetch(`/trending/movie/${endpoint}`)
    const onTabChange = (tab) => {
 setEndpoint(tab === "Day" ?"day" :"week")
    }

  return (
    <div className='carouseSection'>
        <ContentWrapper>
            <span className="carouseTitle">Trending</span>
            <SwitchTab data={["Day" ,"Week"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data = {data?.results} loading={loading}/>

    </div>
  )
}

export default Trending