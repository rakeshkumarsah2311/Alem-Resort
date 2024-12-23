import Image from "next/image"
import Container from "@/components/ui/Container"
import AboutUsImage from "@/assets/about-us.webp"
import FounderImage from "@/assets/founder.jpeg"
import InstagramIcon from "@/assets/instagram-icon.svg"
import "./_styles.css"
import Link from "next/link";


export const metadata = {
  title: 'About Us',
}



const AboutUsPage = () => {
  return (
    <>
      <main className="pb-10">
        <Container className={`mt-10`}>
          {/* <Image
            src={MainLogo} alt="alem travel logo"
            width={320} height={250}
            style={{ objectFit: "contain" }}
            className="mx-auto hidden lg:block"
          /> */}


          <article className="mt-10 grid gap-y-10 lg:grid-cols-2 text-center lg:text-left" >
            <div>
              <h5 className="uppercase tracking-widest font-federo text-grey-one opacity-70 text-sm">alem travel</h5>
              <h1 className="text-4xl lg:text-6xl uppercase mt-2">About Us</h1>

              <div className="mt-3 text-grey-one lg:w-10/12 font-federo">


                <div style={{
                  backgroundImage: "url('/alem-circle-logo.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }} className="space-y-3 mt-5">
                  <p>
                    Alem Travel, established in 2024, is a travel company registered under the Department of Tourism.
                  </p>


                  <p>
                    Our founder Mr. Kuldeep Ghalley who is Bike enthusiast launched the company for all the motorbike riders who want to explore and ride in beautiful country Bhutan. The feeling when you ride in Bhutan is no other feeling that you will experience with the Himalayas all around. You will feel free from the world, you will feel unstoppable, riding with passion and joy.
                  </p>

                  <p>So get ready to explore Bhutan like never before.</p>

                  <div>
                    <p>&quot;Alem Travel&quot;</p>
                    <p>Let the adventure begin!</p>
                  </div>

                  <Link
                    href={"https://www.instagram.com/alembhutantravel/"}
                    className=" hover:opacity-80 flex items-center gap-x-1 w-max mx-auto lg:mx-0"
                    target="_blank"
                  >
                    <Image
                      src={InstagramIcon}
                      alt="instagram icon"
                      width={35}
                      height={35}
                      className=""
                    />
                    <h5 className="uppercase font-inter text-xs">Follow us on Instagram</h5>

                  </Link>
                </div>

                <div className="mt-10">
                  <h2 className="text-3xl">Founder</h2>
                  <h3 className="mt-1">Name: Kuldeep Ghalley</h3>
                  <h6 className="text-sm">Founder of &quot;ALEM Travel&quot;</h6>


                </div>
              </div>



              <Link
                href={"https://www.instagram.com/kuldeep_ghalley/"}
                className=" hover:opacity-80 flex items-center gap-x-1 mt-1"
                target="_blank"
              >
                <Image
                  src={InstagramIcon}
                  alt="instagram icon"
                  width={35}
                  height={35}
                  className=""
                />
                <h5 className="uppercase font-inter text-xs">Kuldeep Ghalley</h5>

              </Link>
            </div>
            

            {/* Column Right */}
            <figure className="relative">
              <Image
                src={AboutUsImage} alt="alem travel about us image"
                className="rounded-md about-us-image"
                height={300}
                width={400}
                style={{ objectFit: "cover" }}
              />

              <Image
                src={FounderImage}
                alt="founder image"
                width={120}
                height={120}
                style={{ objectFit : "cover", height : 120, width : 120 }}
                className="rounded-full absolute top-4 right-1/2 translate-x-1/2"
              />
            </figure>
          </article>
        </Container>
      </main>

    </>
  )
}

export default AboutUsPage