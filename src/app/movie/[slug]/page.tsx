import MoviePage from "@/features/MoviePage/MoviePage";
type MoviePageProps = {
  //params word needed
  params: {
    slug: string;
  };
};
const Page = ({ params }: MoviePageProps) => {
  console.log(params.slug)
  return (
    <div>
      <MoviePage slug={params.slug} />
    </div>
  );
};
export default Page;
