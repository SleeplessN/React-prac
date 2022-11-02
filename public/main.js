import { Icon } from './components/Icon.js';
import { Button } from './components/Button.js';
var container = document.getElementById('root');
var root = ReactDOM.createRoot(container);
root.render(React.createElement(React.StrictMode, null, React.createElement(Button, {
  status: "idle"
}), React.createElement(Button, {
  status: "pending"
}), React.createElement(Button, {
  status: "resolve"
}), React.createElement(Button, {
  status: "rejected"
}), React.createElement(Button, {
  status: "disabled"
})));
//# sourceMappingURL=main.js.map