import ItenaryOverviewItem from "./IntenaryOverviewItem";
import Link from "next/link";

export default function ItenaryOverview() {
  
  return (
    <div className="-translate-y-28">
      <h5 className="text-center mb-4 uppercase text-light tracking-wide">
        Explore by Bike, Experience the mountains
      </h5>
      <div 
        className="relative grid grid-cols-2 lg:grid-cols-5 gap-x-3 gap-y-8 px-2 text-center pt-7 pb-10 bg-white drop-shadow-primary  max-w-6xl w-11/12 mx-auto rounded-xl "
      >
        <ItenaryOverviewItem title={`Arrive at Phuentsholing`} day={`01`} />
        <ItenaryOverviewItem title={`Phuentsholing-Haa-Chelela-Paro`} day={`02`} />
        <ItenaryOverviewItem title={`Paro Taktsang hike`} day={`03`} />
        <ItenaryOverviewItem title={`Paro-Thimpu-Dochula-Punakha-Thimpu`} day={`04`} />
        <ItenaryOverviewItem title={`Thimphu-Phuentsholing`} day={`05`} />

        <Link href={'#complete-itenary'} className="btn-primary w-max absolute left-1/2 -translate-x-1/2 -bottom-4 rounded-md">View Complete Itenary</Link>
      </div>

    </div>
  )
}
