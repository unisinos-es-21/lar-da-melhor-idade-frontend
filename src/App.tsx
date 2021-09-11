import { Router } from '@reach/router';

import { Login } from './containers/Login';
import { Home } from './containers/Home';

function App() {
  return (
    <main>
      <Router>
        <Login path="/"></Login>
        <Home path="/home"></Home>
      </Router>
    </main>
  );
}

export default App;
