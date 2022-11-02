import { Icon } from './components/Icon.js';
import { Button } from './components/Button.js';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Button status="idle" />
    <Button status="pending" />
    <Button status="resolve" />
    <Button status="rejected" />
    <Button status="disabled" />
  </React.StrictMode>
);
