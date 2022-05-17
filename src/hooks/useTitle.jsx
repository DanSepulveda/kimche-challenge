import { useEffect } from 'react'

const useTitle = (title) => {

    useEffect(() => {
        document.title = title
        window.scrollTo(0, 0)
        //eslint-disable-next-line
    }, [])
}

export default useTitle