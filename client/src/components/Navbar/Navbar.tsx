import HomeIcon from '../../assets/icons/home.svg';
import AnalyticsIcon from '../../assets/icons/analytics.svg';
import SettingsIcon from '../../assets/icons/settings.svg';
import AddIcon from '../../assets/icons/addButton.svg'


export function Navbar() {
    return (
        <>
            <nav className='flex justify-between fixed w-full h-20 bottom-0 bg-indigo-50'>
                <div className='flex justify-between w-1/2 mx-8 my-4'>
                    <img src={HomeIcon} alt='home icon' className='w-12 h-12 hover-pulse' />
                    <img src={AnalyticsIcon} alt='analytics page icon' className='w-12 h-12 hover-pulse' />
                    <img src={SettingsIcon} alt='settings icon' className='w-12 h-12 hover-pulse' />
                </div>
                <div className='absolute top-[-50%] right-0'>
                    <button className='m-4 hover-jump'>
                        <img src={AddIcon} alt='home icon' className='w-16 h-16' />
                    </button>
                </div>
            </nav>
        </>
    )
}