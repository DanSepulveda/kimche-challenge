import GroupSection from './GroupSection'

const CardsGrid = ({ countries }) => {
    return (
        <div className='w-full grow'>
            {countries.map(group => <GroupSection group={group} key={group[0]} />)}
        </div>
    )
}

export default CardsGrid