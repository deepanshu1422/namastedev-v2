import { Bricolage_Grotesque, Outfit } from 'next/font/google'
import localFont from 'next/font/local'

// export const inter = Inter({
//     subsets: ['latin'],
//     display: 'swap',
//     variable: "--font-inter"
// })

// export const space_mono = Space_Mono({
//     subsets: ['latin'],
//     display: 'swap',
//     weight: ["400", "700"],
//     variable: "--font-space-mono"
// })

// export const mulish = Mulish({
//     subsets: ['latin'],
//     display: 'block',
//     weight: ["400", '200', "300", "600", "500", "700", "800", "900"],
//     variable: "--font-mulish"
// })

// export const mont = Montserrat({
//     subsets: ['latin'],
//     display: 'block',
//     weight: ["400", "500", "600", "700"],
//     variable: "--font-mont"
// })

export const bric = Bricolage_Grotesque({
    subsets: ["latin-ext"],
    variable: "--font-bric",
    display: "swap",
});

export const outfit = Outfit({
    display: "swap",
    subsets: ["latin"],
    variable: "--font-outfit",
    weight: ["100", "300", "400", "500", "600", "700"],
  });

export const localJakarta = localFont({
    src: [
        {
            path: '/fonts/PlusJakartaSans-VariableFont_wght.ttf',
            style: 'normal',
        },
        {
            path: '/fonts/PlusJakartaSans-Italic-VariableFont_wght.ttf',
            style: 'italic',
        },
    ],
    variable: "--font-jakarta"
})