import { Still } from "@/utils/types";
import StillCard from "./StillCard";
type AllStillsProps = {
  stills: Still[];
};

const AllStills = ({ stills }: AllStillsProps) => {
  console.log(stills);
  return (
    <div className=" w-full grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {stills.map((still) => (
        <div key={still.id}>
          <StillCard still={still.image_url} id={still.imdb_id} />
        </div>
      ))}
    </div>
  );
};

export default AllStills;
