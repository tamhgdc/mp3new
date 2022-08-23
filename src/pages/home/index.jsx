import Cover from "../../components/cover"
import AlbumCover from '../../components/albumCover'
import TitleParagraph from "../../components/titleParagraph"
import { Context } from "../../components/globalState"
import {useContext, useEffect} from 'react'
import {Link} from 'react-router-dom'

function Home() {
    const {Songs} = useContext(Context)
    const listsTodayChoice = Songs["today-choice"]
    const listsNewday = Songs['newDay']
    const listsHighlight = Songs['highlight']
    const listsCard = Songs['Card']
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
    <>
        <TitleParagraph 
        title='LỰA CHỌN HÔM NAY' 
        children={<Link className="text-right text-g-0 text-xs md:text-sm mt-2 font-medium
         mr-2 md:mr-6 lg:mr-1 hover:underline hover:text-white" to='/'>XEM TẤT CẢ</Link>}/>
        <div className="flex mx-auto flex-wrap w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom">
                {
                    listsTodayChoice.map((list) => (
                    <Cover 
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    url={list.url}
                    thumbnail={list.thumbnail}
                    description={list.description}
                    />))
                }
        </div>
        <TitleParagraph 
        title="TOP TRENDING" 
        children={<Link className="text-right text-g-0 text-xs md:text-sm mt-2 font-medium
         mr-1 md:mr-6 lg:mr-1 hover:underline hover:text-white" to='/'>XEM TẤT CẢ</Link>}/>
        <div className="flex mx-auto flex-wrap w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom">
                {
                    listsHighlight.map((list) => (
                    <Cover 
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    url={list.url}
                    thumbnail={list.thumbnail}
                    description={list.description}
                    />))
                }
        </div>
        <TitleParagraph 
        title='NHẠC MỚI MỖI NGÀY' 
        children={<Link className="text-right text-g-0 text-xs md:text-sm mt-2 font-medium
         mr-2 md:mr-6 lg:mr-1 hover:underline hover:text-white" to='/'>XEM TẤT CẢ</Link>}/>
        <div className="flex mx-auto flex-wrap w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom">
                {
                    listsNewday.map((list) => (
                    <AlbumCover 
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                    songs={list.songs}
                    />))
                }
        </div>
        <TitleParagraph 
        title='XONES CORNER' 
        children={<Link className="text-right text-g-0 text-xs md:text-sm mt-2 font-medium
         mr-2 md:mr-6 lg:mr-1 hover:underline hover:text-white" to='/'>XEM TẤT CẢ</Link>}/>
        <div className="flex mx-auto flex-wrap mb-footer w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom">
                {
                    listsCard.map((list) => (
                    <AlbumCover 
                    key={list.id}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                    songs={list.songs}
                    />))
                }
        </div>
    </>
    )
}
export default Home