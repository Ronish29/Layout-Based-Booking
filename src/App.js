import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import RestaurantLayout from './components/RestaurantLayout';
import TurfLayout from './components/TurfLayout';
import BanquetLayout from './components/BanquetLayout';

function App() {
  const [selectedItem, setSelectedItem] = useState('Restaurants');

  const renderContent = () => {
    switch (selectedItem) {
      case 'Restaurants':
        return <RestaurantLayout />;
      case 'Turfs':
        return <TurfLayout/>;
      case 'Banquets':
        return <BanquetLayout/>;
      default:
        return <div>Default Layout</div>;
    }
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[16%]">
          <Sidebar selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </div>
        <div className="flex-grow">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default App;
