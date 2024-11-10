import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            'logo-blue': '#069edd',
            'logo-blue-dark': '#0f3447',
            'logo-green': '#51a41e',
            'logo-green-dark': '#003b25',
            'logo-white': '#ced9dd'
         },
         fontFamily: {
            logo: ['Tomorrow', 'sans-serif'],
            texto: ['Montserrat', 'sans-serif'],
         },
      },
   },
   plugins: [],
};
export default config;
