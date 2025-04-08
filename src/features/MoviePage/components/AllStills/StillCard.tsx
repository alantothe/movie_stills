import Image from "next/image";
type StillCardProps = {
  still: string;
  id: string;
};
const StillCard = ({ still, id }: StillCardProps) => {
  return (
    <div >

      <Image
        
          className=" w-full h-full object-cover cursor-pointer hover:border-amber-300 border-2"
          alt={id}
          src={still}
          data-fancybox="gallery"
          width={1000}
          height={1000}
        ></Image>
    </div>
  );
};

export default StillCard;
