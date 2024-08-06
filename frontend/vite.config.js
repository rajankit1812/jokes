import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/api': 'http://localhost:3000'      //url request ka origin yhi hai to vite application khi pe bhi chlrhi ho pr proxy add krne se server ko lgega ki request aarhi hai 3000se jbki chlto rha tha vite app 5173 pe
    },
  },
  plugins: [react()],
})
