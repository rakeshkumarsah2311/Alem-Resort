
import Gradient from "./Gradient";
import Buttons from "./Buttons";
import Container from "@/components/ui/Container";


export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] lg:h-[80vh] flex-center flex-col text-light text-center">
      <Gradient />
      <Gradient />

      <video autoPlay muted loop playsInline
        className="absolute inset-0 h-full w-full object-cover -z-20"
        poster={"/hero-poster.png"}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* <Image src={HeroImage}
      placeholder="blur"
      alt="alem travel"
      layout="fill" style={{ objectFit: "cover" }} className="-z-20" F
      /> */}

      <Container>
        <h1 className="text-5xl lg:text-7xl xl:text-8xl">Alem Travel</h1>
        <p className="lg:text-lg xl:text-xl w-10/12 mx-auto">A journey of a thousand miles begins with a single step</p>

        <div className={`flex justify-center`}>
          <Buttons />
        </div>
      </Container>
    </section>
  )
}