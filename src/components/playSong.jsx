import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import './styleSong.css'
import {useContext, useRef} from 'react'
import {Context} from '../components/globalState'


function PlaySong() {
    const { Songs, DataSong, setDataSong, DataAlbum, pause, setPause, playlist } = useContext(Context)
    const refVol = useRef()

    const handleClickNext = () => {
        if(DataSong.id) {
            const newData = Songs['song'].find(song => song.id === (DataSong.id + 1))
            if(!newData) {
                setDataSong(Songs['song'][0])
                localStorage.setItem('DataSong', JSON.stringify(Songs['song']))
            }else{
                const newDataJson = JSON.stringify(newData)
                localStorage.setItem('DataSong', newDataJson)
                setDataSong(newData)
            }
        }
        else if(DataSong.num) {
            if(DataAlbum.songs.find(song => song.num === DataSong.num)){
                const newData = DataAlbum.songs.find(song => song.num === (DataSong.num + 1))
                if(!newData) {
                    setDataSong(DataAlbum.songs[0])
                    localStorage.setItem('DataSong', JSON.stringify(DataAlbum.songs[0]))
                }
                else {
                    setDataSong(newData)
                    const newDataJson = JSON.stringify(newData)
                    localStorage.setItem('DataSong', newDataJson)
                }
            }
            else{
                const newPlaylist = playlist.songs.find(song => song.num === (DataSong.num + 1))
                if(!newPlaylist){
                    setDataSong(playlist.songs[0])
                    localStorage.setItem('DataSong', JSON.stringify(playlist.songs[0]))
                }else{
                    setDataSong(newPlaylist)
                    const newDataJson = JSON.stringify(newPlaylist)
                    localStorage.setItem('DataSong', newDataJson)
                }
            }
        }
    }
    const handleClickPre = () => {
        if(DataSong.id) {
            const newData = Songs['song'].find(song => song.id === (DataSong.id - 1))
            if(!newData) {
                setDataSong(Songs['song'][0])
                const DataJson = JSON.stringify(Songs['song'][0])
                localStorage.setItem('DataSong', DataJson)
            }
            else{
                setDataSong(newData)
                const newDataJson = JSON.stringify(newData)
                localStorage.setItem('DataSong', newDataJson)
            }
        }else if(DataSong.num) {
            if(DataAlbum.songs.find(song => song.num === DataSong.num))
            {
                const newData = DataAlbum.songs.find(song => song.num === (DataSong.num - 1))
                if(!newData) {
                    setDataSong(DataAlbum.songs[0])
                    localStorage.setItem('DataSong', JSON.stringify(DataAlbum.songs[0]))
                }
                else {
                    setDataSong(newData)
                    const newDataJson = JSON.stringify(newData)
                    localStorage.setItem('DataSong', newDataJson)
                }
            }else{
                const newPlaylist = playlist.songs.find(song => song.num === (DataSong.num - 1))
                if(!newPlaylist){
                    setDataSong(playlist.songs[0])
                    localStorage.setItem('DataSong', JSON.stringify(playlist.songs[0]))
                }else{
                    setDataSong(newPlaylist)
                    const newDataJson = JSON.stringify(newPlaylist)
                    localStorage.setItem('DataSong', newDataJson)
                }
            }
        }
    }

    const handlePause = () => {
        if(pause){
            refVol.current.audio.current.pause()
            setPause(false)
            console.log('Pause')
        }
    }

    return (  
        <div className='fixed bottom-0 w-full flex border-t border-solid border-[rgba(0,0,0,.2)]'>
            <div className='flex min-w-[240px] md:w-[385px] mx-auto bg-[rgb(34,34,34)] items-center shadow'>
                <img src={DataSong.thumbnail ?? DataSong.img} className='w-10 h-10 rounded-full ml-[10px] md:ml-5' />
                <div className='flex flex-1 flex-col'>
                    <span className='text-sm md:text-[16px] ml-[10px] w-[200px] md:w-[250px] truncate'>{DataSong.title ?? DataSong.name}</span>
                </div>
            </div>
            <AudioPlayer 
            className='music-player'
            src={DataSong.url}
            ref={refVol}
            layout='horizontal-reverse'
            showSkipControls={true} 
            showJumpControls={false}
            showFilledVolume={true}
            onClickNext={handleClickNext}
            onClickPrevious={handleClickPre}
            onListen={handlePause}
            />
        </div>
    );
}

export default PlaySong;
