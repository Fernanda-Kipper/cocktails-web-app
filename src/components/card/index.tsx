import Image from "next/image"
import "./styles.css"

interface CardProps {
    imageUrl: string,
    title: string
}

export function Card({imageUrl, title} : CardProps){
    return(
        <div className="card">
            <img
              src={imageUrl}
              alt={title}
              className="card-img"
            />
            <h3>{title}</h3>
        </div>
    )
}