import { useSelector } from 'react-redux'
import { countryState } from '../redux/countrySlice'
import getLangList from '../utils/getLangList'
import Detail from './Detail'

const CountryCard = ({ country }) => {
    const { name, capital, code, continent, currency, emoji, languages, native, phone } = country
    const { groupBy } = useSelector(countryState)

    return (
        <div className='rounded-lg px-5 py-10 shadow bg-slate-100'>
            <p className='text-5xl text-center'>{emoji}</p>
            <h4 className='text-center text-xl my-4 font-ubuntu'>{name}</h4>
            <Detail title='Original' content={native} />
            <Detail title='Capital' content={capital} />
            <Detail title='Currency' content={currency} />
            <Detail title='Code' content={code} />
            <Detail title='Phone code' content={phone} />
            {groupBy !== 'continent' && <Detail title='Continent' content={continent.name} />}
            {groupBy === 'continent' && <Detail title='Languages' content={getLangList(languages)} />}
        </div>
    )
}

export default CountryCard