// src/App.jsx
function App() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 text-center">
      <div>
        <h1 className="text-4xl font-bold text-taupe-800">Welcome to Peak Oasis</h1>
        <p className="mt-4 text-lg text-gray-700">Beach picnic | Events | Glamping</p>
        <a 
          href="https://forms.gle/your-booking-form-link"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}

export default App;