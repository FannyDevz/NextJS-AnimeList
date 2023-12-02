import Link from "next/link";

const Header = ({title, url, urlTitle}) => {
    return (
        <div className="p-4 flex justify-between items-center">
            <div className="text-xl font-bold text-color-accent">{title}</div>
            {
                url && urlTitle ? (
                    <Link href={url} className="text-md underline hover:text-blue-500 transition-all duration-300 text-color-accent">
                        {urlTitle}
                    </Link>
                ) : null
            }
        </div>
    )
}

export default Header;