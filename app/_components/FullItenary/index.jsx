import Container from "@/components/ui/Container";
import Image from "next/image";
import BikeLogo from "@/assets/bike-logo.png"
import ItenaryCard from "./ItenaryCard";
import BookingSystem from "@/components/BookingSystem";
// import BookingSystem from "@/components/BookingSystem";


export default function FullItenary() {
  return (
    <Container className={` mt-24`}>

      <Image src={BikeLogo}
        className="mx-auto lg:ml-0"
        alt="alem travel logo" width={110} height={120} style={{ objectFit: "contain" }}
      />

      <h2 className="text-4xl my-6">BHUTAN RIDE</h2>


      <section id="complete-itenary" className="lg:flex justify-between gap-x-6 space-y-10">
        <div className="grid lg:grid-cols-2 gap-x-6 gap-y-8">
          <ItenaryCard
            day={'01'}
            heading={'Arrive from Bagdogra/NJP to Phuntsholing'}
            subHeading={`(172km, 04 hrs) `}
            description={'On arrival in Phuentsholing, met by our Tour representative or tour guide will recieve you and after clearing immigration  formalities, you will be welcomed by Alem Hotel and Resort along with the refreshment. After check-in to the hotel and rest, there will be a short conference about your tour before dinner'}
          />
          <ItenaryCard
            day={'02'}
            heading={`Phuntsholing to Paro via Haa.`}
            subHeading={`(167.1kms, 05 hours)`}
            description={`After breakfast we will start our ride for Haa. On the way we will pass numerous small towns like Gedu and Chhukha where you can stop for sightseeing. Later after you will stop for lunch at Haa. After lunch your ride begins for Paro, making loops around the Chelela pass (3988 metres above sea level) about hours' ride along a thickly-forested road, providing stunning views of sacred mountain Jomolhari, Jichu Darke and reaches Paro town. Check in at Paro and dinner. Overnight at the hotel in Paro. (Altitude 2,280m)`}
          />
          <ItenaryCard
            day={'03'}
            heading={`Tiger's Nest Hiking (Paro Taktsang)`}
            subHeading={`(3120 metres above sea level)`}
            description={`After healthy breakfast will move for one of the most popular spiritual thrilling hikes up to Paro Taktsang Monastery, also known as "Tiger's Nest". Taktsang monastery is perched on the cliff and offers you spectacular scenery of blue pine and rhododendrons forest. It will take 5-6 hours back and forth, the trail climbs through beautiful pine forest and an occasional prayers flag on the way. Upon reaching there you see the beauty of Paro town and Taktsang. Lunch will be served at Paro. Upon your way back, you will see Drukgyel village and dzong. At evening we will move for Paro town for sightseeing, after that back to hotel and dinner.`}
          />
          <ItenaryCard
            day={'04'}
            heading={'Paro - Thimphu - Dochula pass-Punakha Thimphu'}
            subHeading={``}
            description={`Early morning we will embark for fascinating and thrilling ride to Thimphu after the breakfast. Thimphu, the modern capital city of Bhutan taking the short stop at Chuzom, the confluence of Paro and Thimphu rivers. On the road from Thimphu (2,248 to 2648 metres) to Punakha (1200 metres above sea level) between them you will come around 108 memorial chortens or stupas (Dochula pass 8,100 metres alti- tude) where we will take break for lunch and have breath taking panoramic view of eastern Himalayan Mountain ranges. After lunch, move towards Punakha where you will be visiting, Punakha dzong (Historical fortress featuring ancient architecture tranquil courtyards, with monks' chants and a striking buddha statue, set between two rivers Po Chu and Mo Chu) Suspensionbridge: one of the oldest and longest suspension bridge in Bhutan spanning the Po Chu River with fantastic views of valley and mountain. After that we will drive back to Thimphu, dinner and overnight stay at hotel.`}
          />
          <ItenaryCard
            day={'05'}
            heading={'Depart Phuentsholing'}
            subHeading={``}
            description={`After breakfast we will depart for Phuentsholing by site viewing and will take break in High Way Host in chhukha. Reaching at hotel after check- in process there will be small culture programme organised by Alem Management to make your last night stay in Bhutan more memorable.`}
          />
          <ItenaryCard
            day={'06'}
            heading={'Departure: Phuentsholing to Bagdogra/NJP'}
            subHeading={``}
            description={`After a healthy breakfast, Check-out from the hotel, drive to Bagdogra Airport. Your tour ends with sweet memories. `}
          />

        </div>


        <div className="drop-shadow-primary px-5 py-7 bg-white h-max w-full lg:min-w-[360px] space-y-5 text-center">
          <BookingSystem />
        </div>

      </section>
    </Container>
  )
}