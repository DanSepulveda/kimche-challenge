const Detail = ({ title, content }) => {
    return (
        <p>
            <span className='font-bold text-gray-600'>{`${title}: `}</span>
            <span className='text-gray-700'>{content}</span>
        </p>
    )
}

export default Detail