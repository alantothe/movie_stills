import FilterPageResults from "@/features/FilterPage/FilterPageResults";
type FilterPageProps = {
  params: {
    type: string;
    slug: string;
  };
};
const FilterPage = ({ params }: FilterPageProps) => {
  console.log(params);
  return (
    <div>
      <FilterPageResults type={params.type} slug={params.slug} />
    </div>
  );
};

export default FilterPage;
