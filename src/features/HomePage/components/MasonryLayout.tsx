import MovieCard from "./MovieCard";
import { MovieFiltered } from "../types";



const MasonryLayout = ({ data }: { data: MovieFiltered[] }) => {
    return (
        <div className="w-full px-10 grid grid-cols-1 gap-4 place-items-stretch sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data?.map((movie) => (
                <MovieCard key={movie.imdb_id} movie={movie} />
            ))}
        </div>
    );
};

export default MasonryLayout;
