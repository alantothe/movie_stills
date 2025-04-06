
import MoviePage from "@/features/MoviePage/MoviePage";
type BlogPageProps = {
//params word needed 
  params: {
    slug: string;
  };
}

const BlogPage = ({ params } : BlogPageProps ) => {
  return (
    <div>
      <h1>Blog Post: {params.slug}</h1>
      <MoviePage params={params.slug } />
    </div>
  );
};

export default BlogPage;
