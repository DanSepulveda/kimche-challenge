import Button from './Button'

const GroupBy = ({ buttonHandler, groupBy }) => {
    return (
        <section className='flex items-center'>
            <p className='font-medium text-xl mr-10'>Grouped by</p>
            <Button onClick={() => buttonHandler('continent')} active={groupBy === 'continent'}>
                Continent
            </Button>
            <Button onClick={() => buttonHandler('language')} active={groupBy === 'language'}>
                Language
            </Button>
        </section>
    )
}

export default GroupBy