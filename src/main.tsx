// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from '@/app/App';
import { ConfigProvider, theme } from 'antd';

const root = document.getElementById('root');
if (!root) throw Error('root elements not exist!');

createRoot(root).render(
  // <StrictMode>
  <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
    <App />
  </ConfigProvider>,
  // </StrictMode>,
);
