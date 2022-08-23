import {useContext, useEffect, useRef} from 'react'
import {Context} from '../../components/globalState'

function Playlist() {
    const { DataSong, setDataSong, idSong, setIdSong, playlist } = useContext(Context)
    const windowFocus = useRef()
    const handlePlaySong = (list) => {
        const IDsong = JSON.stringify(list.num)
        const infoSong = JSON.stringify(list)
        localStorage.setItem('idSong', IDsong)
        localStorage.setItem('DataSong', infoSong)
        setIdSong(list.num)
        setDataSong(list)
    }
    useEffect(() => {
        setIdSong(DataSong.num) 
    },[DataSong])
    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <div className='mt-5 mb-footer'> 
            {playlist.songs.map((list) => (
                <div 
                className={`flex mx-auto p-[10px] rounded-[12px] hover:bg-teal-50 hover:text-[#333] cursor-pointer 
                w-[365px] md:w-[740px] lg:w-[980px] xl:w-[1210px] 
                ${idSong === list.num && 'bg-teal-50'}`}
                onClick={() => handlePlaySong(list)}
                key={list.num}
                ref={windowFocus}
                >
                    {/* Thumbnail */}
                    <img 
                    src={list.img}
                    className='rounded-lg w-10 h-10 md:w-[46px] md:h-[46px] mr-5' 
                    />
                    {/* Title & Artist */}
                    <div className='flex flex-1 flex-col'>
                        {/* Title */}
                        <div 
                        className={`text-sm md:text-lg font-semibold truncate  ${idSong === list.num && 'text-teal-400'}`}
                        >
                            {list.name}
                        </div>
                        {/* Artist */}
                        <div className='mt-[2px] text-xs md:text-sm text-g-0 truncate w-[250px] md:w-full'>
                            {list.singer}
                        </div>
                    </div>
                    {/* Show Time Deration */}
                    <div className={`text-xs md:text-base font-semibold flex items-center text-g-0 ${idSong === list.num && 'text-teal-400'}`}>{list.time}</div>
                </div>
            ))}
        </div>
    );
}

export default Playlist;