
export default async function getYears(): Promise<number[]> {
  const response = await fetch("http://localhost:8081/only/years/");
    const data: {year : number}[] = await response.json();
    
    const filterYears = data.flatMap((value) => {
        return value.year

    })

  return filterYears.sort()
}

