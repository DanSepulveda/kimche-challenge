import CountryCard from './CountryCard'

const GroupSection = ({ group }) => {
    const title = group[0]
    const countries = group[1]

    return (
        <div className='mb-20'>
            <h3 className='text-4xl text-center uppercase bg-red-800 py-12 text-gray-300/90 font-bold'>
                {title}
            </h3>
            <div className='p-10 gap-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {countries.map(country => <CountryCard country={country} key={country.name} />)}
            </div>
        </div>
    )
}

export default GroupSection