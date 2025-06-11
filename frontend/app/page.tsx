import { GridItem } from "@/helper/Constants";

export default function Home ()
{
  return (
    <div className="grid grid-cols-2 gap-5">
      <GridItem title="MPSC" />
      <GridItem title="UPSC" />
    </div>
  );
}
