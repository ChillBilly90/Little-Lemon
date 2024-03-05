import {Route,Routes} from 'react-router-dom';
import ReservationConfirmed from './components/pages/Reservation/ReservationConf.js';
import pages from './utils/pages';
import Schema from './components/schema/Schema.js';
import Home from './components/pages/Home';
import Reservations from './components/pages/Reservation';
import NavPlugin from './components/pages/NavPlugin/index.js';
import ErrorBoundary from './Appboundary.js';

const App = () => {
  return (
    <ErrorBoundary>
      <Schema>
        <Routes>
          <Route 
            path={pages.get('home').path} 
            element={<Home />} 
          />
          <Route
            path={pages.get('about').path}
            element={<NavPlugin />}
          />
          <Route
            path={pages.get('menu').path}
            element={<NavPlugin />}
          />
          <Route 
            path={pages.get('Reservations').path} 
            element={<Reservations />} 
          />
          <Route
            path={pages.get('confirmedReservation').path}
            element={<ReservationConfirmed/>}
          />
          <Route
            path={pages.get('orderOnline').path}
            element={<NavPlugin />}
          />
          <Route
            path={pages.get('login').path}
            element={<NavPlugin />} />
        </Routes>
      </Schema>
    </ErrorBoundary>
  );
};

export default App;
