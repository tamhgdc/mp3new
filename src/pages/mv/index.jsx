import {useContext, useEffect} from 'react'
import {Context} from '../../components/globalState'
import MvCover from '../../components/mvCover'

function Mv() {
    const {Songs} = useContext(Context)
    const listsMv = Songs['mv']
    useEffect(() => {
        window.scrollTo(0,0)
    },[])
    
    return (
        <>
            <div className='flex mx-auto flex-wrap w-[490px] md:w-[735px] lg:w-[980px] xl:w-custom mb-footer'>
                {listsMv.map((list) => (
                <MvCover 
                key={list.id}
                id={list.id}
                title={list.title}
                url={list.url}
                thumbnail={list.thumbnail}
                sortDescription={list.description}
                />
                ))}
            </div>
        </>
    );
}

export default Mv;