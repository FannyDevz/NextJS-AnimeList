const HeaderMenu = ({title, description}) => {
    return (
        <div>
            <div className="pt-8 pb-2">
                <h3 className="text-center text-3xl font-bold text-color-accent">{title}</h3>
                {description && <p className="text-center text-md text-color-primary">{description}</p>}
            </div>
        </div>
    )
}
export default HeaderMenu;