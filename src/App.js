import { Navbar, Services, Footer, Transaction, Welcome } from "./components/index";

function App() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome"> 
        <Navbar/>
        <Welcome/>
      </div>
      <Services/>
      <Transaction/>
      <Footer/>
    </div>
  );
}

export default App;
