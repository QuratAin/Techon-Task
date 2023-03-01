import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Accounts from './pages/Accounts';
import Cards from './pages/Cards';
import Transactions from './pages/Transcations';
import Payment from './pages/Payments';
import Invoicing from './pages/Invoicing';
import Trading from './pages/Trading';
import Reports from './pages/Reports';
import Error from './pages/Error';
import SharedLayout from './pages/SharedLayout';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='accounts' element={<Accounts />} />
          <Route path='cards' element={<Cards />} />
          <Route path='transactions' element={<Transactions />} />
          <Route path='payment' element={<Payment />} />
          <Route path='invoicing' element={<Invoicing />} />
          <Route path='trading' element={<Trading />} />
          <Route path='reports' element={<Reports />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;