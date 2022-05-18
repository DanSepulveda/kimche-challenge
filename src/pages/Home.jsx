import useTitle from '../hooks/useTitle'
import { useEffect } from 'react'
import { useQuery } from '@apollo/client'
import { useDispatch, useSelector } from 'react-redux'
import { countryState, setCountries, filterCountries } from '../redux/countrySlice'
import GET_ALL from '../apollo/getAll'
import H1 from '../components/H1'
import GroupBy from '../components/GroupBy'
import NoResults from '../components/NoResults'
import CardsGrid from '../components/CardsGrid'

const Home = () => {
    useTitle('Countries | Home')
    const dispatch = useDispatch()
    const { filteredCountries } = useSelector(countryState)
    const { data, error, loading } = useQuery(GET_ALL)

    useEffect(() => {
        if (!loading && !error) dispatch(setCountries(data.countries))
        //eslint-disable-next-line
    }, [loading])

    // Conditional rendering for GroupBy and CardsGrid components
    const condition = Object.keys(filteredCountries).length
    const groupByComponent = condition ? <GroupBy /> : null
    const results = condition ? <CardsGrid countries={filteredCountries} /> : <NoResults />

    if (loading) return

    return (
        <div className='flex flex-col items-center w-screen'>
            <div className='flex flex-col items-center bg-gray-800 py-7 w-full'>
                <H1>Country search</H1>
                <h2 className='text-center w-1/2 mb-10 text-gray-300/90 text-lg'>
                    Get some basic information about any country
                </h2>
                <input
                    type='text'
                    autoFocus
                    name='country'
                    className='w-1/2 mb-10 py-2 px-4 rounded-full shadow-md outline-none border border-teal-600/30 hover:border-teal-600/60 focus:border-teal-600/75 transition-all'
                    placeholder='Search by country name'
                    onChange={(e) => dispatch(filterCountries(e.target.value))}
                />
                <div className='h-16'>
                    {groupByComponent}
                </div>
            </div>
            {results}
        </div>
    )
}

export default Home