import MovieCard from "@/features/HomePage/components/MovieCard"
import {SingleStillMovieFiltered} from "@/utils/types"

type MasonryLayoutProps = {
    movies: SingleStillMovieFiltered[]
}


const MasonryLayout = ({ movies }: MasonryLayoutProps) => {
    
    return (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 px-10">
            {movies.map((movie) => (
                <div key={movie.imdb_id}>
                    <MovieCard movie={movie} />
                </div>
            ))}

        </div>
    )
}

export default MasonryLayout