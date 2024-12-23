
module.exports = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			inter: ["var(--font-inter)"],
  			federo: ["var(--font-federo)"]
  		},
  		textColor: {
  			light: '#F6F6F6',
  			'grey-one': '#747474',
  			primary: '#018B7F'

  		},
  		colors: {
  			primary: '#018B7F'
  		},
  		backgroundColor: {
  			light: '#F3F3F3',
				"grey-one" : "#747474"
  		},
  	}
  },
};
