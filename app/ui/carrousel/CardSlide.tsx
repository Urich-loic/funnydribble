import styles from './carrousel.module.css'
import { Profile } from '../Profile'

export default function CardSlide({ profile }: {
    profile: Profile
}) {

    const profileStyle = {
        background: `url(${profile.profileImg})`,
    }
    return (
        <div className={`slide overflow-hidden relative flex justify-end text-white ${styles.slide} bg-gray-600 rounded-2xl flex flex-col items-flex-end  justify-start p-5 `} style={profileStyle}>
            <p className='text-left font-bold text-l z-10'>{profile.name}</p>
            <p className='text-left pb-2 m-0 font-bold text-xs z-10'>{profile.role}</p>
            <div className='text-left  flex gap-1 z-10'>
                <span className='bg-white bg-opacity-15 border border-white p-1 hover:bg-black hover:text-white rounded-xl text-xs font-normal hover:border-black'>{profile.domain}</span>
                <span className='bg-white bg-opacity-15 border border-white p-1 hover:bg-black hover:text-white rounded-xl text-xs font-normal hover:border-black'>{profile.tool}</span>
                <span className='bg-white bg-opacity-15 hover:bg-black hover:text-white border border-white p-1 hover:border-black rounded-xl text-xs font-normal'>{profile.specialisation}</span>
            </div>
            <span className='absolute top-0 left-0 bg-black bg-opacity-25 bottom-0 right-0 z-1'></span>
        </div>
    )
}
