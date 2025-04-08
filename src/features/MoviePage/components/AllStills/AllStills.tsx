import { Still } from "@/utils/types";
import StillCard from "./StillCard";

type AllStillsProps = {
  stills: Still[];
};

const AllStills = ({ stills }: AllStillsProps) => {
  return (
    <div className="w-full px-5 sm:px-30 md:px-40px py-8">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">

        {stills.map((still) => (
          <div key={still.id}>
            <StillCard still={still.image_url} id={still.imdb_id} />
          </div>
        ))}
    
      </div>
    </div>
  );
};

export default AllStills;
