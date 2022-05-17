import { useEffect, useState } from 'react'
import useTitle from '../hooks/useTitle'
import { useLazyQuery } from '@apollo/client'
import GET_ALL from '../apollo/getAll'
import H1 from '../components/H1'
import GroupBy from '../components/GroupBy'
import NoResults from '../components/NoResults'
import CardsGrid from '../components/CardsGrid'

const Home = () => {
    useTitle('Countries | Home')
    const [getCountries, { loading, data }] = useLazyQuery(GET_ALL)
    const [groupBy, setGroupBy] = useState('continent')
    const [countries, setCountries] = useState([])

    const getAllCountries = async () => {
        await getCountries()
    }

    const inputHandler = (event) => {
        console.log(event.target.value)
    }

    useEffect(() => {
        getAllCountries()
    }, [])

    // Conditional rendering for GroupBy component
    const groupByComponent = countries.length
        ? <GroupBy setGroupBy={setGroupBy} groupBy={groupBy} />
        : null

    // Conditional component rendering if there is/is not results
    const results = countries.length
        ? <CardsGrid countries={countries} groupBy={groupBy} />
        : <NoResults />

    return (
        <div className='flex flex-col items-center w-screen'>
            <div className='flex flex-col items-center bg-gray-800 py-7 w-full'>
                <H1>Country search</H1>
                <h2 className='text-center w-1/2 mb-10 text-gray-300/90 text-lg'>
                    Get some basic information about any country
                </h2>
                <input
                    type='text'
                    name='country'
                    className='w-1/2 mb-10 py-2 px-4 rounded-full shadow-md outline-none border border-teal-600/30 hover:border-teal-600/60 focus:border-teal-600/75 transition-all'
                    placeholder='Search by country name'
                    onChange={inputHandler}
                />
                {groupByComponent}
            </div>
            {results}
        </div>
    )
}

export default Home