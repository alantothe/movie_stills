import { Movie } from "../types"
import Image from "next/image"

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <div>
            <Image 
                alt={movie.title} 
                src={movie.stills[0].image_url}
                width={300}
                height={450}
            />
        </div>
    )
}

export default MovieCard