import Link from "next/link";

export default function Pricing() {
  return (
    <div className={`backdrop-blur-sm bg-white/30 text-black w-full max-w-max p-4 lg:p-7 rounded-md mx-auto`}>
      
      <h4 className={`font-medium text-lg`}>Total Cost: Nu. 62,500/head</h4>
      <p>If Riding with Partner (Couple) Additional Charge of Nu. 10,000 </p>

      <h5 className={`uppercase mt-5 text-lg font-medium mb-2`}>cost includes - </h5>

      <ul className={`space-y-1 list-disc list-inside ml-1`}>
        <li>Bike (Royal Enfield Himalaya bike)</li>
        <li>Back-up vehicle</li>
        <li>Food and Accommodation in 3 &#9733; hotel (double sharing in one room.)</li>
        <li>Pick-up and drop from Bagdogra (Indian bus/cab)</li>
        <li>Technician (Mechanic)</li>
        <li>Professional Guide(English & Hindi Speaking)</li>
      </ul>



      <h5 className={`uppercase mt-5 text-lg font-medium mb-2`}>cost excludes - </h5>

      <ul className={`space-y-1 list-disc list-inside ml-1`}>
        <li>SDF Fees</li>
        <li>Travel Insurance</li>
        <li>Use of bars and beverages in hotel/bars</li>
        <li>Personal Shopping/Souvenirs</li>
        <li>Tips and Gratuities to guide/driver/trek crew</li>
      </ul>


      <div className={`mt-2 lg:mt-4 text-yellow-200`}>
        <h6>For Further Inquiries please feel free to contact us</h6>
        <Link href={`tel:+97517254444`} className="hover:opacity-70" >@+975-17254444 (Whatsapp No.)</Link>
      </div>


    </div>
  )
}
