import { useEffect } from 'react'

const useTitle = (title) => {

    useEffect(() => {
        document.title = title
        window.scrollTo(0, 0)
    }, [])
}

export default useTitle