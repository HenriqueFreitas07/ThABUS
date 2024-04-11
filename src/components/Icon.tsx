type IconProps = {
    name: string;
    onClick?: () => void;
    className?: string;
    color?: string;
}

export default function Icon({ name, onClick, className}: IconProps) {

    return (
        <>
            <div onClick={onClick} className="w-fit">
                <i className={`fi fi-${name} ${className}`}></i>
            </div>
        </>
    )
}
