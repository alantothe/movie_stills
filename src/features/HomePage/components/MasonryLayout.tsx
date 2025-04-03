import MovieCard from "./MovieCard";
import { Movie } from "../types";

const MasonryLayout = ({ data }: { data: Movie[] }) => {
    return (
        <div className="w-full px-5 grid grid-cols-1 gap-4 place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((movie) => (
                <MovieCard key={movie.imdb_id} movie={movie} />
            ))}
        </div>
    );
};

export default MasonryLayout;
