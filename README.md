# react-three-fiber-toy

### 실행 방법

```bash
npm i # 의존성 설치
npm run dev # 실행
```

---

### Typescript + React + R3F 환경 구성

> **필수**

```bash
npm create vite@latest . # React, Typescript 선택
npm i # package.json 의존성 설치

npm i three # ThreeJS
npm i @react-three/fiber
npm i @react-three/drei

npm i -D @types/three # ThreeJS에 필요한 타입
npm i -D prettier eslint-config-prettier # prettier
npm i -D vite-tsconfig-paths
```

- prettier
  - vscode에서 `eslint`, `prettier` 확장 프로그램 설치
  - mac : `[⌘ + ,]` / window : `[Ctrl + ,]`로 설정 창에 진입
    - Default Formatter : Prettier
    - Format On Save : true
  - .prettierrc
    ```json
    {
      "semi": true,
      "singleQuote": true,
      "printWidth": 80,
      "tabWidth": 2,
      "useTabs": false,
      "bracketSpacing": true,
      "trailingComma": "all",
      "arrowParens": "always",
      "endOfLine": "lf"
    }
    ```
- vite-tsconfig-paths
  - vite.config.ts

  ```tsx
  import { defineConfig } from 'vite';
  import react from '@vitejs/plugin-react';
  import tsconfigPaths from 'vite-tsconfig-paths';

  export default defineConfig({
    plugins: [react(), tsconfigPaths()],
  });
  ```

  - tsconfig.app.json
    - “compilerOptions”에 추가

  ```json
  "baseUrl": ".",
  "paths": {
    "@/*": ["./src/*"],
  }
  ```

> **옵션**

```bash
npm i leva # property control gui
npm i zustand # 상태 관리
```

---

### 코딩 컨벤션

- 변수명

  | 프로젝트 명     | kebab-case                 |
  | --------------- | -------------------------- |
  | 폴더            | kebab-case                 |
  | 파일            | camelCase                  |
  | 변수            | camelCase                  |
  | 함수            | camelCase                  |
  | 리액트 컴포넌트 | PascalCase                 |
  | 클래스          | PascalCase                 |
  | 인터페이스      | PascalCase (접두사 "I" ??) |
  | 타입 별칭       | PascalCase                 |
  | enum            | PascalCase                 |
  | 상수            | UPPER_SNAKE_CASE           |

- `interface`와 `type` 중에 `type` 선호

---

### Tailwind (v4 + vite)

```bash
npm install tailwindcss @tailwindcss/vite
```

- vite.config.js
  ```jsx
  import { defineConfig } from 'vite';
  import tailwindcss from '@tailwindcss/vite';
  export default defineConfig({
    plugins: [tailwindcss()],
  });
  ```
- CSS
  - 최상위 css에 추가
  ```css
  @import 'tailwindcss';
  ```
- vscode extension 설치
  - Tailwind CSS IntelliSense
  - Tailwind CSS Highlight Intellisense
