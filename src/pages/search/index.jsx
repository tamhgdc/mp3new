import TrackPlaylist from '../../components/trackPlaylist'
import {Context} from '../../components/globalState'
import {useContext, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import translate from '../../components/translateVN'


function Search() {
    const {DataSearch, Songs, ArrDs, setArrDs} = useContext(Context)
    const location = useLocation()
    const arr = []
    useEffect(() => {
                Songs['typeAlbum'].forEach((list) => {
                    list.songs.filter(item => {
                        const DataUpper = translate(DataSearch).toUpperCase()
                        const findingSong = translate(item.name).toUpperCase()
                        const findingArtist = item.singer
                        if(findingSong.indexOf(DataUpper) > -1 || findingArtist.indexOf(DataSearch) > -1){
                            arr.push(item)
                            return setArrDs(arr)
                        }
                    })
                })
    }, [location])

    return (  
        <div className='mt-10 mb-footer'>
            {   
                ArrDs.map(list => {
                    return (
                        <TrackPlaylist 
                        key={list.name}
                        num={list.num}
                        name={list.name}
                        url={list.url}
                        singer={list.singer}
                        img={list.img}
                        time={list.time} 
                        />)
                })
            }
        </div>
    );
}

export default Search;