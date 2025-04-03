import { Movie } from "../types"
import Image from "next/image"

const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <div className="w-full h-full">
            <Image 
                className="rounded-2xl w-full h-full object-cover"
                alt={movie.title} 
                src={movie.stills[3].image_url}
                width={300}
                height={450}
            />
        </div>
    )
}

export default MovieCard