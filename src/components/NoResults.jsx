import { useSelector } from 'react-redux'
import { countryState } from '../redux/countrySlice'
import { RiArrowUpLine, RiEmotionSadLine } from 'react-icons/ri'

const NoResults = () => {
    const { inputEmpty } = useSelector(countryState)

    const message = inputEmpty
        ? 'Start writing'
        : 'No results'

    const icon = inputEmpty
        ? <RiArrowUpLine className='text-6xl' />
        : <RiEmotionSadLine className='text-6xl' />

    return (
        <div className='mt-10 bg-slate-100 h-48 w-11/12 md:w-1/2 lg:w-1/3 rounded-lg flex flex-col items-center justify-center shadow text-gray-600'>
            {icon}
            <p className='text-3xl font-bold'>
                {message}
            </p>
        </div>
    )
}

export default NoResults