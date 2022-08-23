import {Link} from 'react-router-dom'
import {useState} from 'react'
import { useContext } from 'react'
import { Context } from './globalState'

const coverProps = {
    id: 0,
    title: '',
    sortDescription: '',
    thumbnail: '',
    url: ''
}

function MvCover(coverProps) {
    const {setDataMv, setPause} = useContext(Context)
    const [isHover, setHover] = useState(false)

    return (
        <div className="m-cover"
        onClick={() => {
            localStorage.setItem('DataMv',JSON.stringify(coverProps))
            setDataMv(coverProps)
            setPause(true)
        }}>
            {/* Image */}
            <Link to={`/mv/${coverProps.id}`}>
                <img src={coverProps.thumbnail} 
                alt={coverProps.title} 
                className={`w-s h-custom rounded-2xl ${isHover === true ? 'shadow-xl shadow-[#666] cursor-pointer ease-in duration-300' : ''}`}
                onMouseOver={() => setHover(true)}
                onMouseOut={() => setHover(false)}
                />
            </Link>

            {/* Title */}
            <div className='mt-2 font-bold text-base w-s hover:underline cursor-pointer truncate'>
                <Link to={`/mv/${coverProps.id}`}>{coverProps.title}</Link>
            </div>

            {/* Description */}
            <div className='text-xs text-g-0 truncate w-s'>
                <span>{coverProps.sortDescription}</span>
            </div>
        </div>
    );
}

export default MvCover;