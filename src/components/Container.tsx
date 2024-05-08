
export type ContainerProps = {
    className?: string,
    children: any
}
export default function Container({ className, children }: ContainerProps) {
    return (
        <div className='container'>
            {children}
        </div>
    )
}
