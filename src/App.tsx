import { Router } from '@reach/router';

import { Login } from './containers/Login';
import { Home } from './containers/Home';
import { Institutionalized } from './containers/Institutionalized';

function App() {
  return (
    <main>
      <Router>
        <Login path="/" />
        <Home path="/home" />
        <Institutionalized path="/institutionalized" />
      </Router>
    </main>
  );
}

export default App;
