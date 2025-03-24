import Footer from "./components/Footer"
import React from 'react';
import ContactPage from './components/Contact-page';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        {/* Your main content goes here */}
        <div className="h-[500px] flex items-center justify-center bg-[#0a0c14] text-white">
          <h1 className="text-3xl font-bold">GDG</h1>
        </div>
      </main>
      <ContactPage/>
      <Footer />
    </div>
  )
}

export default App

