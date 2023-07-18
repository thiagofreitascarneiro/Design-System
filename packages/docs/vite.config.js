/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugins-react'


export default defineConfig({
    plugins: [react()],
})