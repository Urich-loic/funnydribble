import CardSlide from './CardSlide'
import styles from './carrousel.module.css';
import { profiles } from '../Profile';


export default function CarrouselSlide() {
    return (
        <>
            <div className='slideContainer w-full'>
                <div className="slideWrappe flex gap-4 overflow-x-scroll">
                    {profiles.map((profile) => {
                        return(<CardSlide key={profile.name} profile={profile} />)
                    })}
                    
                </div>
            </div>
        </>
    )
}
