import TitleParagraph from "../../components/titleParagraph";
import AlbumCover from "../../components/albumCover";
import {Context} from '../../components/globalState'
import {useContext, useEffect} from 'react'

function TOP() {
    const {Songs} = useContext(Context)
    const listsAlbum = Songs['typeAlbum']
    const listsNewday = Songs['newDay']
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return ( 
    <>
        <TitleParagraph title={'NHẠC VIỆT NAM'}/>
        <div className="flex mx-auto w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom flex-wrap">
            {listsAlbum.map((list) => {
                if(list.album === 'VN'){
                return <AlbumCover 
                key={list.id}
                songs={list.songs}
                id={list.id}
                title={list.title}
                thumbnail={list.thumbnail}
                description={list.description}
            />}
                }) 
            }
            {listsNewday.map((list) => {
                if(list.album === 'VN'){
                return <AlbumCover 
                    key={list.id}
                    songs={list.songs}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                />}
            }) 
            }
        </div>
        <TitleParagraph title={'NHẠC CHÂU ÂU'}/>
        <div className="flex mx-auto w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom flex-wrap">
            {listsAlbum.map((list) => {
                if(list.album === 'USUK'){
                    return <AlbumCover 
                    key={list.id}
                    songs={list.songs}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                />
                }
            })}
            {listsNewday.map((list) => {
                if(list.album === 'USUK'){
                return <AlbumCover 
                    key={list.id}
                    songs={list.songs}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                />}
            }) 
            }
        </div>
        <TitleParagraph title={'NHẠC CHÂU Á'} />
        <div className="flex mx-auto w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom flex-wrap">
            {listsAlbum.map((list) => {
                if(list.album === 'ASIAN'){
                    return <AlbumCover 
                    key={list.id}
                    songs={list.songs}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                />
                }
            })}
            {listsNewday.map((list) => {
                if(list.album === 'ASIAN'){
                return <AlbumCover 
                    key={list.id}
                    songs={list.songs}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                />}
            }) 
            }
        </div>
        <TitleParagraph title={'NHẠC HÒA TẤU'} />
        <div className="flex mx-auto w-[490px] md:w-[760px] lg:w-[980px] xl:w-custom flex-wrap mb-footer">
        {listsAlbum.map((list) => {
                if(list.album === 'PERFORM'){
                    return <AlbumCover 
                    key={list.id}
                    songs={list.songs}
                    id={list.id}
                    title={list.title}
                    thumbnail={list.thumbnail}
                    description={list.description}
                />
                }
            })}
        </div>
    </> 
);
}

export default TOP;