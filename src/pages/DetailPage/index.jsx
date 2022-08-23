import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../../components/globalState'
import TrackPlaylist from '../../components/trackPlaylist'
import {useContext, useEffect} from 'react'

function DetailPage() {
    const { DataAlbum, DataSong, setDataSong , setIdSong } = useContext(Context)
    const songOfAlbum = DataAlbum.songs
    const handlePlay = () => {
        setDataSong(DataAlbum.songs[0])
    }
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    useEffect(() => {
       setIdSong(DataSong.num)
    },[DataSong])

    return (  
        <>
            {/* Info album */}
            <div className='flex mb-6 md:mb-[45px] justify-center md:mx-[11vw] mt-3'>

                {/* Image */}
                <div className="min-w-[100px] h-[100px] md:min-w-[288px] md:min-h-[288px]">
                    <img src={DataAlbum.thumbnail} className='rounded-xl w-full h-full'/>
                </div>

                {/* Title */}
                <div className="flex flex-col justify-center ml-5 md:ml-14">
                    <div className="md:text-3xl font-bold">{DataAlbum.title}</div>
                    <div className="text-xs md:text-lg mt-6 text-[#a7a7a7] truncate w-[250px] md:whitespace-normal md:w-full">
                        {`Playlist by ${DataAlbum.songs[0].singer}, ${DataAlbum.songs[1].singer}, ${DataAlbum.songs[2].singer}`}
                    </div>
                    <div className="flex items-center text-xs md:text-sm mt-[2px] text-[#a7a7a7]">
                        <span className='mr-3'>Update at 27/7/2022</span>
                        <span className='mr-3'>100 Songs</span>
                        <span className='flex items-center'>
                            <FontAwesomeIcon icon={faHeart} className='w-[18px] h-[18px] text-red-600' />
                            192547
                        </span>
                    </div>
                    <div className="text-xs truncate w-[250px] md:w-full md:whitespace-normal md:text-sm text-[#a7a7a7] mt-6">{DataAlbum.description}</div>
                    <div className="flex mt-8">
                        <button 
                        className='flex justify-center items-center rounded-[10px] py-2 px-4 w-auto min-h-[40px] duration-300 hover:scale-105 text-[#335eea] bg-[#bbcdff] font-semibold'
                        onClick={handlePlay}>
                            <FontAwesomeIcon icon={faPlay} className='w-3 h-3 md:w-5 md:h-5' />
                            <span className='ml-2 text-xs md:text-lg'>PLAY</span>
                        </button>
                    </div>
                </div>

            </div>
            <div className='mb-[95px]'>
                {songOfAlbum.map(list => 
                (<TrackPlaylist
                key={list.num} 
                num={list.num}
                name={list.name}
                url={list.url}
                singer={list.singer}
                img={list.img}
                time={list.time} 
                />))}
            </div>
        </>
    );
}

export default DetailPage;