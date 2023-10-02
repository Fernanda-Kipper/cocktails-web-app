import "./styles.css";

interface ButtonPrimaryProps {
    label: string,
    onClick: () => void
}

export function ButtonPrimary({ label, onClick }: ButtonPrimaryProps){
    return(
        <button onClick={onClick} className="btn-primary">
            {label}
        </button>
    )
}