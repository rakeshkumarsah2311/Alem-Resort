import { Inter, Federo } from "next/font/google"


export const interFont = Inter({
    subsets : ["latin"],
    weight : ["300", "400", "500", "600"],
    variable : "--font-inter"
})
export const federoFont = Federo({
    subsets : ["latin"],
    weight : ["400"],
    variable : "--font-federo"
})