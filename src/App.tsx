import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Foods from './pages/Foods';
import Categories from './pages/Categories';
import AddFood from './pages/AddFood';
import EditFood from './pages/EditFood';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'foods-list':
        return <Foods onNavigate={setCurrentPage} />;
      case 'foods-add':
        return <AddFood />;
      case 'foods-edit':
        return <EditFood />;
      case 'categories':
        return <Categories />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <Layout currentPage={currentPage} onNavigate={setCurrentPage}>
      {renderPage()}
    </Layout>
  );
}

export default App;
