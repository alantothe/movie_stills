import MovieCard from "./MovieCard";
import { Movie } from "../types";

const MasonryLayout = ({ data }: { data: Movie[] }) => {
    return (
        <div>
            {data?.map((movie) => (
                <MovieCard key={movie.imdb_id} movie={movie} />
            ))}
        </div>
    );
};

export default MasonryLayout;
