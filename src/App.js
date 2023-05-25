import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      <header className="bg-HFbgColor">
        <Header />
      </header>
      <main className="bg-bgColor flex-grow">
        <Main />
      </main>
      <footer className="bg-HFbgColor flex-none">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
