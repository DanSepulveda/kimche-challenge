import CountriesSection from './CountriesSection'

const CardsGrid = ({ countries }) => {
    return (
        <div className='w-full grow'>
            {countries.map(group => <CountriesSection group={group} key={group[0]} />)}
        </div>
    )
}

export default CardsGrid