import { Still } from "@/utils/types";

type AllStillsProps = {
  stills: Still[];
};

const AllStills = ({ stills }: AllStillsProps) => {
  console.log(stills);
  return <div></div>;
};

export default AllStills;
