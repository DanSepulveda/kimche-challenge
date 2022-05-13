import useTitle from '../hooks/useTitle'
import H1 from '../components/H1'
import CardsGrid from '../components/CardsGrid'
import Button from '../components/Button'

const Home = () => {
    useTitle('Countries | Home')

    return (
        <div>
            <H1>Country search</H1>
            <p className='text-center'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis, tempore! Alias, porro odio! Soluta nam, neque earum, voluptates fugiat veritatis possimus enim sint modi, ipsa ipsam recusandae cumque doloribus qui
            </p>
            <input type='text' name='country' />
            <div className='flex'>
                <h2>Grouped by</h2>
                <Button>Botón 1</Button>
                <Button>Botón 2</Button>
            </div>
            <CardsGrid />
        </div>
    )
}

export default Home