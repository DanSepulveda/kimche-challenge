import useTitle from '../hooks/useTitle'
import H1 from '../components/H1'
import CardsGrid from '../components/CardsGrid'
import Button from '../components/Button'
import { useState } from 'react'

const Home = () => {
    useTitle('Countries | Home')
    const [goupBy, setGoupBy] = useState('continent')


    const inputHandler = (event) => {
        console.log(event.target.value)
    }

    const buttonHandler = (label) => {
        setGoupBy(label)
    }

    return (
        <div>
            <H1>Country search</H1>
            <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, tempore! Alias, porro odio! Soluta nam, neque earum, voluptates fugiat veritatis possimus enim sint modi, ipsa ipsam recusandae cumque doloribus qui
            </p>
            <input
                type='text'
                name='country'
                className='w-75'
                onChange={inputHandler}
            />
            <div className='flex items-center'>
                <p className='font-medium text-xl mr-10'>Grouped by</p>
                <Button onClick={() => buttonHandler('continent')} active={goupBy === 'continent'}>
                    Continent
                </Button>
                <Button onClick={() => buttonHandler('language')} active={goupBy === 'language'}>
                    Language
                </Button>
            </div>
            <CardsGrid />
        </div>
    )
}

export default Home