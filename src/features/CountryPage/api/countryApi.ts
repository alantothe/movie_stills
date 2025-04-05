type CountryFlatProps = {
  country: string;
  url: string;
};

async function getFlag(country: string): Promise<CountryFlatProps> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${country}`
  );
  const data = await response.json();

  const countryFlag = {
    country: country,
    url: data[0].flags.svg,
  };

  return countryFlag;
}

async function getAllFlags(arr: string[]) {
  try {
    const flagsArr = await Promise.all(arr.map(getFlag));
    return flagsArr;
  } catch (error) {
    console.error(`Err`, error);
  }
}

export default async function getCountriesFlag(): Promise<
  CountryFlatProps[] | undefined
> {
  const response = await fetch("http://localhost:8081/only/countries/");
  const data = await response.json();
  let countriesArr: string[] = [];
  for (const value of data) {
    const tempArr = (value.country as string)
      .split(", ")
      .map((country) => country.replace(/ /g, "%20").toLowerCase());
    for (let i = 0; i <= tempArr.length - 1; i++) {
      if (countriesArr.includes(tempArr[i])) {
        continue;
      } else {
        countriesArr.push(tempArr[i]);
      }
    }
  }
  const nameReplacements: Record<string, string> = {
    "united%20states": "usa",
    "united%20kingdom": "united kingdom of great britain and northern ireland",
  };
  countriesArr = countriesArr.map((item) => {
    const key = item.toLowerCase();
    return nameReplacements[key] || item;
  });

  console.log(countriesArr);
  const arrCountryFlag = getAllFlags(countriesArr);

  return arrCountryFlag;
}
