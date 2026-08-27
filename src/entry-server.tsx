import { renderToString } from 'react-dom/server';
import App from './App';

export { getPrerenderRoutes, getSeoForPath } from './seo';

export function render(pathname: string): string {
  return renderToString(<App initialPath={pathname} />);
}
