import useTitle from '../hooks/useTitle'
import { useState } from 'react'
import H1 from '../components/H1'
import GroupBy from '../components/GroupBy'
import NoResults from '../components/NoResults'
import CardsGrid from '../components/CardsGrid'

const Home = () => {
    useTitle('Countries | Home')
    const [fetched, setFetched] = useState(false)
    const [countries, setCountries] = useState([])
    const [groupBy, setGroupBy] = useState('continent')

    const inputHandler = (event) => {
        console.log(event.target.value)
    }

    const buttonHandler = (label) => {
        setGroupBy(label)
    }

    // Conditional rendering for GroupBy component
    const groupByComponent = countries.length ? <GroupBy buttonHandler={buttonHandler} groupBy={groupBy} /> : null

    // Conditional component rendering if there is/is not results
    const results = countries.length
        ? <CardsGrid countries={countries} groupBy={groupBy} />
        : fetched
            ? <NoResults />
            : null

    return (
        <div className='flex flex-col items-center'>
            <H1>Country search</H1>
            <p className='text-center w-1/2 mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, tempore! Alias, porro odio! Soluta nam, neque earum, voluptates fugiat veritatis possimus enim sint modi, ipsa ipsam recusandae cumque doloribus qui
            </p>
            <input
                type='text'
                name='country'
                className='w-1/2 mb-10 py-2 px-4'
                placeholder='Search by country name'
                onChange={inputHandler}
            />
            {groupByComponent}
            {results}
        </div>
    )
}

export default Home