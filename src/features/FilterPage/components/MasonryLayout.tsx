import MovieCard from "@/features/HomePage/components/MovieCard"
import {SingleStillMovieFiltered} from "@/utils/types"

type MasonryLayoutProps = {
    movies: SingleStillMovieFiltered[]
}


const MasonryLayout = ({ movies }: MasonryLayoutProps) => {
    
    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.imdb_id}>
                    <MovieCard movie={movie} />
                </div>
            ))}

        </div>
    )
}

export default MasonryLayout