const Button = ({ children, onClick, active }) => {
    const color = active
        ? ' bg-teal-600 pointer-events-none'
        : ' bg-slate-300/50 hover:bg-slate-300/70 transition-all duration-300 text-teal-700'

    return (
        <button
            type='button'
            onClick={onClick}
            className={`text-white w-36 mx-4 text-lg py-1 px-3 select-none rounded${color}`}
        >
            {children}
        </button>
    )
}

export default Button