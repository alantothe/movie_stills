import CountryPage from "@/features/CountryPage/CountryPage";

const Country = () => {
  return (
    <div className="pt-5">
      <h1 className="text-center text-md font-bold sm:text-lg md:text-2xl">
        Select a Country:{" "}
      </h1>
      <CountryPage />
    </div>
  );
};

export default Country;
