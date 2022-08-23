import { NavLink } from 'react-router-dom'
import {useContext, useState} from 'react'
import avt from '../../assets/img/avt.jpg'
import logo from '../../assets/img/logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import {Context} from '../globalState'
import {useNavigate} from 'react-router-dom'

function Header() {
    const navLinkClass = ({isActive}) => ({
        color: isActive ? '#fff' : '',
        borderBottom: isActive ? '2px solid #fff' : ''
    })
    const { DataSearch, setDataSearch } = useContext(Context)
    const [show, setShow] = useState('hidden')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        setShow('hidden')
        navigate(`/search/${e.target[0].value}`)
    }
    const handleShow = () => {
        const result = show === 'hidden' ? setShow('') : setShow('hidden')
        return result
    }

    return (
        <header className='py-4 grid lg:grid-cols-3 text-center text-g-0 fixed w-full bg-[rgba(34,34,34,.95)] top-0'>
            <div className='text-2xl lg:pr-20 xl:pr-7'>
                <img src={logo} className='w-11 h-11 inline-block mr-2' />
                <span className='align-middle'>PLAY me</span>
                <FontAwesomeIcon onClick={handleShow} icon={faChevronDown} className='lg:hidden w-4 h-4 mt-1 pl-2 cursor-pointer hover:text-white'/>
            </div>
            <div className={`grid lg:flex justify-around text-xl xl:mr-20 mt-2 ${show}`}>
                <NavLink to='/' className='hover:text-white' style={navLinkClass} onClick={() => setShow('hidden')}>HOME</NavLink>
                <NavLink to='/top100' className='hover:text-white' style={navLinkClass} onClick={() => setShow('hidden')}>TOP100</NavLink>
                <NavLink to='/playlist' className='hover:text-white' style={navLinkClass} onClick={() => setShow('hidden')}>PLAYLIST</NavLink>
                <NavLink to='/mv' className='hover:text-white' style={navLinkClass} onClick={() => setShow('hidden')}>MV</NavLink>
            </div>
            <div className={`flex lg:flex justify-center mt-2 ${show}`}>
                <div className='w-52 xl:w-64 h-7 bg-white rounded-2xl mr-4 flex content-center'>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className='w-5 h-5 mt-1 pl-2'/>
                    <form 
                    method='GET'
                    onSubmit={handleSubmit}>
                        <input type='search' 
                        className='w-44 xl:w-56 h-5 rounded-2xl text-gray-500 pl-2 xl:pl-4 text-xs xl:text-sm focus:outline-none mt-1 pr-2' 
                        placeholder='Tìm kiếm bài hát, nghệ sĩ... ' 
                        spellCheck={false}
                        onChange={e => setDataSearch(e.target.value)}
                        value={DataSearch}
                        />
                    </form>
                </div>
                <img src={avt} className='w-8 h-8 rounded-full xl:mr-32 cursor-pointer hidden md:block'/>
            </div>
        </header>
    )
}
export default Header