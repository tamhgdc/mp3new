import { useContext, useState } from "react"
import {Context} from '../components/globalState'

function Recommend() {
    const [display, setDisplay] = useState('flex')
    const { Songs, playlist, setPlaylist } = useContext(Context)
    const handleTypeMusic = (type) => {
        switch(type){
            case 'YOUNG': {
                const dataPlaylist = Songs['newDay'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'EDM': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'REFORMIST': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'USUK': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'KOREA': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'SAD': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'RAP': {
                const dataPlaylist = Songs['newDay'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'PERFORM': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.album.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'JAPAN': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))
                setDisplay('hidden')
                break
            }
            case 'CHILL': {
                const dataPlaylist = Songs['typeAlbum'].find(list => list.type.toUpperCase() === type)
                setPlaylist(dataPlaylist)
                localStorage.setItem('Playlist', JSON.stringify(dataPlaylist))  
                setDisplay('hidden')
                break
            }
            default:
                throw new Error('This type music is not exist')
        }
    }

    return (  
        <div className={`${!playlist.id ? display : 'hidden'} justify-center items-center w-full h-full fixed z-[1] top-0 bg-[rgba(255,255,255,.3)] align-center`}>
            <div className="w-[460px] h-[315px] bg-[#222] rounded-[20px] px-[10px]">
                <h1 className="text-center py-2">Hãy chọn thể loại mà bạn yêu thích</h1>
                <div className="grid grid-cols-3">
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'YOUNG'}>
                        Nhạc trẻ
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'EDM'}>
                        Nhạc EDM
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'REFORMIST'}>
                        Nhạc cải lương
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'USUK'}>
                        Nhạc USUK
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'KOREA'}>
                        Nhạc Hàn
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'SAD'}>
                        Nhạc buồn
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'RAP'}>
                        Nhạc Rap
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'PERFORM'}>
                        Nhạc hòa tấu
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'JAPAN'}>
                        Nhạc Nhật
                    </button>
                    <button className="w-[137px] h-[50px] border-[1px] border-[#fff] rounded-[15px] px-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:border-none duration-300 my-2 ml-[5px] text-[#fff] font-semibold text-xs md:text-[15px]"
                    onClick={(e) => handleTypeMusic(e.target.value)}
                    value={'CHILL'}>
                        Nhạc chill
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Recommend;