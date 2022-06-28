import { HashRouter, Route, Routes } from 'react-router-dom';
import { ProductsList } from '../../features/ProductsList';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<ProductsList/>} />
      </Routes>
    </HashRouter>
  )
}

export default App;
