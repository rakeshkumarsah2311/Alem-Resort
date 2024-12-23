import Container from "@/components/ui/Container"
import Link from "next/link"
import PhoneIcon from "@/assets/phone-icon.svg"
import EmailIcon from "@/assets/email-icon.svg"
import WebIcon from "@/assets/web-icon.svg"
import Image from "next/image"
import LogoWithFlag from "@/assets/logo-with-flag.jpeg"


export const metadata = {
  title: 'Contact Us',
}



export default function ContactUsPage() {
  return (
    <main>
      <Container className={"mt-20 text-center lg:text-left"}>
        <h1 className="text-4xl lg:text-5xl text-center">Contact Us</h1>

        <div className="grid lg:grid-cols-2 gap-y-8 items-center">
          <div className="space-y-12 mt-14 flex flex-col items-center max-w-md ml-auto w-full bg-gray-100/50 px-6 py-10 rounded-lg">
            <Link href={"mailto:alembhutantravel@gmail.com"} className="grid lg:grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center w-full contact-item">
              <figure className="bg-gray-100 w-max rounded-full p-3 mx-auto">
                <Image src={EmailIcon} width={45} height={45} alt="email" />
              </figure>
              <div>
                <h5 className="text-xl font-inter font-medium">Email</h5>
                <p >alembhutantravel@gmail.com</p>
              </div>
            </Link>

            <Link href={"https://www.alemtravel.bt/"} className="grid lg:grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center w-full contact-item">
              <figure className="bg-gray-100 w-max rounded-full p-3 mx-auto">
                <Image src={WebIcon} width={45} height={45} alt="website" />
              </figure>
              <div>
                <h5 className="text-xl font-inter font-medium">Website</h5>
                <p>https://www.alemtravel.bt/</p>
              </div>
            </Link>

            <Link href={"tel:+97517254444"} className="grid lg:grid-cols-[auto_1fr] gap-x-3 gap-y-3 items-center w-full contact-item">
              <figure className="bg-gray-100 w-max rounded-full p-3 mx-auto">
                <Image src={PhoneIcon} width={45} height={45} alt="phone call" />
              </figure>
              <div>
                <h5 className="text-xl font-inter font-medium">Phone</h5>
                <p>+97517254444</p>
              </div>
            </Link>
          </div>

          <Image 
            src={LogoWithFlag}
            alt="contact us"
            width={280}
            height={280}
            className="mx-auto"
          />
        </div>
      </Container>
    </main>
  )
}