import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        // 호스트를 '0.0.0.0'으로 설정하여, 모든 네트워크 인터페이스에서 수신하게 합니다.
        host: '0.0.0.0',
    },
    plugins: [
        react(),
        {
            name: 'markdown-loader',
            transform(code, id) {
                if (id.slice(-3) === '.md') {
                    // For .md files, get the raw content
                    return `export default ${JSON.stringify(code)};`
                }
            },
        },
    ],
    resolve: {
        alias: {
            // `@` 또는 다른 문자를 사용하여 `src` 폴더를 가리킬 수 있습니다.
            '@': path.resolve(__dirname, './src'),
        },
    },
    // base: '/vite-falcon-boilerplate/',
})
