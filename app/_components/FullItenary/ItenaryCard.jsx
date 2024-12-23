export default function ItenaryCard({ day, heading, subHeading, description }) {
  return (
    <article className="bg-light px-4 py-5 space-y-5 rounded-lg">
      <h5 className="flex flex-col">
        <span className="inline-block text-sm">DAY</span>
        <span className="inline-block text-3xl font-medium">{day}</span>
      </h5>
      <h3 className="text-xl font-inter">
        <span className="block">{heading}</span>
        { subHeading && <span className="block text-sm">{subHeading}</span>}
      </h3>

      <p className="text-grey-one text-[15px]">{description}</p>
    </article>
  )
}