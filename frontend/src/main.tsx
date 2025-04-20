import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './assets/scss/index.scss';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { HeroesHome } from './pages/HeroesHome/index.tsx';
import { Layout } from './templates/Layout/index.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Layout>
        <HeroesHome />
      </Layout>
    </Provider>
  </StrictMode>,
);
