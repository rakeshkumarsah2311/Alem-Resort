export default function ItenaryOverviewItem({ title, day }) {
  return (
    <div className="itenary-overview-item flex flex-col items-center justify-between">
      <h5 className="text-[15px] md:text-base font-medium">{title}</h5>
      <span className="inline-block h-5 w-0.5 bg-gray-200"></span>
      <p className="text-sm md:text-base">Day {day}</p>
    </div>
  )
}
