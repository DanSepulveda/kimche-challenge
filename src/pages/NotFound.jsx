import useTitle from '../hooks/useTitle'
import { Link } from 'react-router-dom'

const NotFound = () => {
    useTitle('Countries | Not found')

    return (
        <div className='flex flex-col justify-center items-center grow'>
            <h2 className='text-9xl font-roboto text-gray-500'>
                404
            </h2>
            <h1 className='text-2xl font-medium font-ubuntu text-gray-600'>
                Not found
            </h1>
            <p className='text-gray-600 mb-8'>
                The page you are looking for does not exists
            </p>
            <Link to='/' className='bg-teal-600 text-white hover:bg-teal-600/90 transition-all py-1 px-2 rounded'>
                Go home
            </Link>
        </div>
    )
}

export default NotFound