import { Router } from '@reach/router';
import { Login } from './containers/Login';

function App() {
  return (
    <main>
      <Router>
        <Login path="/"></Login>
      </Router>
    </main>
  );
}

export default App;
