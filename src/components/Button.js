import classNames from "classnames"


function Button ({children, variant = 'default'}) {
    
    return(
        <button className={classNames({
            "p-4 h-10 flex items-center bg-gray-300 rounded": true,
            "bg-gray-100": variant === 'default',
            "bg-green-600 text-white": variant === 'success',
            "bg-red-600 text-white": variant === 'danger',
            "bg-yellow-400": variant === 'warning'
        })}>{children}</button>
    )
}

export default Button