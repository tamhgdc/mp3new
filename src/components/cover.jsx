import {useState} from 'react'
import {Context} from './globalState'
import {useContext} from 'react'

const coverProps = {
    id: 0,
    title: '',
    description: '',
    thumbnail: '',
    type: '',
    url: ''}

function Cover(coverProps) {
    const [isHover, setHover] = useState(false)
    const {setDataSong} = useContext(Context)
    const handlePlaySong = (list) => {
        const infoSong = JSON.stringify(list)
        localStorage.setItem('DataSong', infoSong)
        setDataSong(list)
    }

    return ( 
        <div className="m-cover" onClick={() => handlePlaySong(coverProps)}>
            {/* Image */}
            <div>
                <img src={coverProps.thumbnail} 
                alt={coverProps.title} 
                className={`w-s h-s rounded-2xl ${isHover === true ? 'shadow-xl shadow-[#666] cursor-pointer ease-in duration-300' : ''}`}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                />
            </div>

            {/* Title */}
            <div className='mt-2 font-bold text-lg w-s hover:underline cursor-pointer truncate'>
                <div>{coverProps.title}</div>
            </div>

            {/* Description */}
            <div className='text-xs text-g-0 truncate w-s'>
                <span>{coverProps.description}</span>
            </div>
        </div>
    );
}

export default Cover;