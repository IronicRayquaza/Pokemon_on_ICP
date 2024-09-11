import React from 'react';
import './App.css'; // Import the CSS file for styling

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <h1>Rayquaza: The Sky High Pokémon</h1>
        <p>The Legendary Pokémon from the Hoenn region</p>
      </header>

      <section className="about-section">
        <h2>About Rayquaza</h2>
        <p>
          Rayquaza is a Legendary Pokémon that lives in the ozone layer above the clouds. Known as the Sky High Pokémon, Rayquaza is a Dragon/Flying type and is famous for its role in calming the conflict between Kyogre and Groudon.
        </p>
      </section>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li><strong>Type:</strong> Dragon/Flying</li>
          <li><strong>Ability:</strong> Air Lock - Negates all weather effects while Rayquaza is in battle.</li>
          <li><strong>Signature Move:</strong> Dragon Ascent - A powerful move that Rayquaza can use to Mega Evolve.</li>
          <li><strong>Legendary Status:</strong> Rayquaza is known for its role in the mythology of the Hoenn region.</li>
        </ul>
      </section>

      <section className="appearance">
        <h2>Appearance</h2>
        <p>
          Rayquaza is a large, serpentine Pokémon with a green body adorned with yellow and black markings. It has a fearsome and majestic appearance with its long, serpentine body and wing-like appendages.
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Pokémon Fan Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
