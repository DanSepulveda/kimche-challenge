import CountriesSection from './CountriesSection'

const CardsGrid = ({ countries }) => {
    return (
        <div className='bg-red-800 w-full grow'>
            {countries.map(group => <CountriesSection gruop={group} key={group[0]} />)}
        </div>
    )
}

export default CardsGrid