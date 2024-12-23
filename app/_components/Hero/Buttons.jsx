import OpenPopupButton from "@/components/ui/OpenPopupButton";
import Link from "next/link";

export default function Buttons() {

  return (
    <div className="flex gap-x-5 lg:gap-x-8 mt-7">
      <OpenPopupButton />
      <Link href={"#complete-itenary"} className="btn-outline"  >
        View Intenary
      </Link>
    </div>
  )
}