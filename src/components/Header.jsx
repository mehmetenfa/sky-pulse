import React from 'react'
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
const Header = () => {
  return (
    <div className='min-w-screen h-[6rem] flex items-center pl-36'>
        <div className='flex flex-row gap-1'>
            <span>
                <ThunderstormIcon style={{ color: 'white', fontSize: 35 }} />
            </span>
            <h1 className='text-HFtextColor text-3xl font-semibold'>SkyPulse</h1>
        </div>
    </div>
  )
}

export default Header