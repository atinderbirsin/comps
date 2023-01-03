function Overlay({...rest}) {
    return (
        <div {...rest} className="fixed inset-0 bg-gray-300 opacity-80">
        </div>
    )
};

export default Overlay;