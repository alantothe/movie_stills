    type FilterPageProps = {
        params: {
            type: string,
            slug: string
        }
    }

const FilterPage = ({params} : FilterPageProps) => {

  return (
    <div>
          <h1>hello {params.type}</h1>
             <h1>world {params.type}</h1>
    </div>
  );
};

export default FilterPage;

