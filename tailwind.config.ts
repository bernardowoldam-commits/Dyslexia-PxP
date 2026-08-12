import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: {
    colors: { ink:"#263238", deep:"#234E70", sky:"#8EC5E8", sage:"#A8D5BA", cream:"#F8F5EF", sun:"#F4D35E" },
    fontFamily: { sans:["Inter","ui-sans-serif","system-ui","sans-serif"] }
  }},
  plugins:[]
};
export default config;