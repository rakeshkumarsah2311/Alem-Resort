import Image from "next/image"
import Link from "next/link"
import ChatOnWhatsappImage from "@/assets/chat-on-whatsapp.png"

const ChatOnWhatsAppButton = () => {
  return (
    <Link href={"https://wa.me/+97577376930"} aria-label="Chat on WhatsApp" className="hover:opacity-60">
      <Image 
        
        src={ChatOnWhatsappImage}
        alt="chat on whatsapp"
        width={200}
        height={40}
        style={{ objectFit : "contain"}}
      />
    </Link>
  )
}

export default ChatOnWhatsAppButton