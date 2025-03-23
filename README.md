# kopipes

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

import { onMounted } from 'vue'
import { useUserStore } from '@/stores/useUserStore'
import api from '@/api/index'

const userStore = useUserStore()

onMounted(async () => {
  const userDetailRes = await api.userDetail(userStore.email)
    const response = await api.skillGetQuestions(userStore.email)
  
  if (response) {
    questions.value = response.map(qs => ({
      
    }))
  }
})