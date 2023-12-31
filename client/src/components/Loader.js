import {LineWave} from 'react-loader-spinner'; 

export default function Loader() {
    return (
        <div className='flex justify-center items-center text-center'>
            <LineWave
          visible={true}
          height="50"
          width="50"
          color="#ffffff"
          ariaLabel="line-wave-loading"
        />
        </div>
    )
}