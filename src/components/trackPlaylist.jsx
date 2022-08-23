import { useContext, useRef } from 'react'
import {Context} from '../components/globalState'

const coverProps = {
    num: 0,
    name: '',
    singer: '',
    img: '',
    time: '',
    url: ''}

function TrackPlaylist(coverProps) {
    const { idSong, setDataSong, setIdSong } = useContext(Context)
    const refFocus = useRef()
    const handlePlaySong = (song) => {
        const IDsong = JSON.stringify(song.num)
        const infoSong = JSON.stringify(song)
        localStorage.setItem('idSong', IDsong)
        localStorage.setItem('DataSong', infoSong)
        setIdSong(song.num)
        setDataSong(song)
        console.log(refFocus.current)
    }
    

    return (
        <div 
        className={`flex mx-auto p-[10px] rounded-[12px] hover:bg-teal-50 hover:text-[#333] cursor-pointer 
        w-[365px] md:w-[740px] lg:w-[980px] xl:w-[1210px] ${idSong === coverProps.num && 'bg-teal-50'}`} 
        onClick={() => handlePlaySong(coverProps)}
        ref={refFocus}
        key={coverProps.num}
        >
            {/* Thumbnail */}
            <img 
            src={coverProps.img}
            className='rounded-lg w-10 h-10 md:w-[46px] md:h-[46px] mr-5' 
            />
            {/* Title & Artist */}
            <div className='flex flex-1 flex-col'>
                {/* Title */}
                <div 
                className={`text-sm md:text-lg font-semibold truncate w-[240px] md:w-full ${idSong === coverProps.num && 'text-teal-400'}`}
                >
                    {coverProps.name}
                </div>
                {/* Artist */}
                <div className='mt-[2px] text-xs md:text-sm text-g-0 truncate w-[200px]'>
                    {coverProps.singer}
                </div>
            </div>
            {/* Show Time Deration */}
            <div className={`font-semibold text-xs md:text-base flex items-center text-g-0`}>{coverProps.time}</div>
        </div>
    );
}

export default TrackPlaylist;