import Link from "next/link";

const Header = ({title, url, urlTitle, setFilter, setOrder , filter, order}) => {
    return (
        <div className="p-4 mt-4 flex justify-between items-center ">
            <div className="text-xl font-bold text-color-accent border-b-1 border-color-accent">{title}</div>
            {
                url && urlTitle ? (
                    <Link href={url} className="text-md underline hover:text-blue-500 transition-all duration-300 text-color-accent">
                        {urlTitle}
                    </Link>
                ) : null
            }
            {filter ? (
                <div className="text-xl font-bold text-color-accent border-b-1 border-color-accent">
                    <select
                        className="text-color-primary"
                        onChange={(e) => setFilter(e.target.value)}
                        value={filter}
                    >
                        <option value="">All</option>
                        <option value="tv">TV</option>
                        <option value="ova">OVA</option>
                        <option value="movie">Movie</option>
                        <option value="special">Special</option>
                        <option value="ona">ONA</option>
                    </select>
                </div>
            ) : null}

            {order ? (
                <div className="text-xl font-bold text-color-accent border-b-1 border-color-accent">
                    <select
                        className="text-color-primary"
                        onChange={(e) => setOrder(e.target.value)}
                        value={order}
                    >
                        <option value="All">All</option>
                        <option value="Desc">Desc</option>
                        <option value="Asc">Asc</option>
                    </select>
                </div>
            ) : null}
        </div>
    )
}

export default Header;