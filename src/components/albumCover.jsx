import {useState, useContext} from 'react'
import { Link } from 'react-router-dom';
import {Context} from '../components/globalState'

const coverProps = {
    id: 0,
    title: '',
    description: '',
    thumbnail: '',
    type: '',
    songs: []
    }

function AlbumCover(coverProps) {
    const [isHover, setHover] = useState(false)
    const {setDataAlbum} = useContext(Context)

    return (  
        <div className="m-cover" 
        onClick={() => {
            const dataAlbum = JSON.stringify(coverProps)
            localStorage.setItem('DataAlbum', dataAlbum)
            setDataAlbum(coverProps) 
            }}>
            {/* Image */}
            <Link to={`/top100/${coverProps.id}`}>
                <img src={coverProps.thumbnail} 
                alt={coverProps.title} 
                className={`w-s h-s rounded-2xl ${isHover === true ? 'shadow-xl shadow-[#666] cursor-pointer ease-in duration-300' : ''}`}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                />
            </Link>

            {/* Title */}
            <div className='mt-2 font-bold text-lg w-s hover:underline cursor-pointer truncate'>
                <Link to={`/top100/${coverProps.id}`}>{coverProps.title}</Link>
            </div>

            {/* Description */}
            <div className='text-xs text-g-0 truncate w-s'>
                <span>{coverProps.description}</span>
            </div>
        </div>
    );
}

export default AlbumCover;