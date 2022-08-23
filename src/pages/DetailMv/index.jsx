import ReactPlayer from 'react-player'
import { useContext } from 'react';
import {Context} from '../../components/globalState'

function DetailMv() {
    const {DataMv} = useContext(Context)

    return (  
        <div className='w-[380px] md:w-[720px] xl:w-[1210px] mb-[70px] mt-2 mx-auto'>
            <div className='flex justify-center mt-3 h-[380px] xl:h-[565px]'>
                <ReactPlayer 
                url={DataMv.url}
                controls={true}
                width='100%'
                height='100%'
                playing={true}
                />
            </div>
        </div>
    );
}

export default DetailMv;