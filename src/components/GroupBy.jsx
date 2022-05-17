import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { groupHandler, countryState } from '../redux/countrySlice'

const GroupBy = () => {
    const dispatch = useDispatch()
    const { groupBy } = useSelector(countryState)

    return (
        <section className='flex items-center'>
            <p className='font-medium text-xl mr-10 text-gray-300/90'>Grouped by</p>
            <Button
                onClick={() => dispatch(groupHandler('continent'))}
                active={groupBy === 'continent'}
            >
                Continent
            </Button>
            <Button
                onClick={() => dispatch(groupHandler('language'))}
                active={groupBy === 'language'}
            >
                Language
            </Button>
        </section>
    )
}

export default GroupBy