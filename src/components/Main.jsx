const Main = ({ children }) => {
    return (
        <main className='bg-gray-100 min-h-screen w-full flex flex-col'>
            {children}
            <footer className='bg-gray-800 py-2'>
                <p className='text-center text-slate-100'>Developed by Daniel Sepúlveda</p>
            </footer>
        </main>
    )
}

export default Main