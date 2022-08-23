import {createContext, useEffect, useState} from 'react'
import Songs from '../data/songs.json'

function Provider({children}) {
    const [DataSong, setDataSong] = useState({})
    const [DataAlbum, setDataAlbum] = useState(() => {
        const dataAlbum = JSON.parse(localStorage.getItem('DataAlbum'))
        return (dataAlbum ?? {})
    })
    const [DataMv, setDataMv] = useState(() => {
        const dataMv = JSON.parse(localStorage.getItem('DataMv'))
        return (dataMv ?? {})
    })
    const [playlist, setPlaylist] = useState(() => {
        const dataPlaylist = JSON.parse(localStorage.getItem('Playlist'))
        return (dataPlaylist ?? {})
    })
    const [idSong, setIdSong] = useState(DataSong.id ?? DataSong.num)
    const [pause, setPause] = useState(false)
    const [DataSearch, setDataSearch] = useState('')
    const [ArrDs, setArrDs] = useState([])
    useEffect(() => {
        setTimeout(() => {
            setDataSong(JSON.parse(localStorage.getItem('DataSong')) ?? {}) 
        }, 300)
    }, [])

    return ( 
        <Context.Provider 
        value={{Songs, DataSong, setDataSong, idSong, setIdSong, DataAlbum, 
                setDataAlbum, DataMv, setDataMv, pause, setPause, DataSearch, 
                setDataSearch, ArrDs, setArrDs, playlist, setPlaylist
        }}>
        {children}
        </Context.Provider>
     );
}

export const Context = createContext()
export default Provider;