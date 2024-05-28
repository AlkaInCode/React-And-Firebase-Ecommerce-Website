import withMT from "@material-tailwind/react/utils/withMT";
 
 export default withMT({
   content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
   theme: {
    extend: {
      colors: {
        customColor: {
          100: '#AD88C6',
          200: '#AD88C6',
          300: '#AD88C6',  // Custom color shade
          400: '#AD88C6',
          500: '#AD88C6',
          600: '#AD88C6',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      fontFamily: {
        cursive: ['"Dancing Script"', 'cursive'],
      },
      fontWeight: {
        'extrabold': 800,
      },
    },
   },
   variants: {},
   plugins: [],
 });
 
