import MoviePage from "@/features/MoviePage/MoviePage";
type MoviePageProps = {
  //params word needed
  params: {
    slug: string;
  };
};
const Page = async ({ params }: MoviePageProps) => {
  const slug = await params;
  return (
     <div className="pt-5">
      <MoviePage slug={slug.slug} />
    </div>
  );
};
export default Page;
