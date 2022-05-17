import Button from './Button'

const GroupBy = ({ setGroupBy, groupBy }) => {
    return (
        <section className='flex items-center'>
            <p className='font-medium text-xl mr-10'>Grouped by</p>
            <Button onClick={() => setGroupBy('continent')} active={groupBy === 'continent'}>
                Continent
            </Button>
            <Button onClick={() => setGroupBy('language')} active={groupBy === 'language'}>
                Language
            </Button>
        </section>
    )
}

export default GroupBy