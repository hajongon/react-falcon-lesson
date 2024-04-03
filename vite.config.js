import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            // `@` 또는 다른 문자를 사용하여 `src` 폴더를 가리킬 수 있습니다.
            '@': path.resolve(__dirname, './src'),
        },
    },
})
