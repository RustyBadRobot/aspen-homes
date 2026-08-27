import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const container = document.getElementById('root')!;
const application = (
  <StrictMode>
    <App />
  </StrictMode>
);

// The build ships complete pre-rendered HTML for crawlers and no-JavaScript users.
// Replace that snapshot when the interactive application starts so browser-only
// state cannot cause hydration mismatches.
container.replaceChildren();
createRoot(container).render(application);
