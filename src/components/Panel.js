function Panel ({children, className, ...rest}) {
    return <div {...rest} className={`${className} border rounded p-3 shadow bg-white w-full`}>
        {children}
    </div>
}

export default Panel;