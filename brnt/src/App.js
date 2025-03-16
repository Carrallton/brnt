import React from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import './App.css';

const App = () => {
  const particlesInit = async (main) => {
    console.log('Initializing particles...');
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log('Particles loaded:', container);
  };

  return (
    <div className="app">
      {/* Частицы */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff',
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Текст по центру */}
      <div className="centered-text">
        <h1>Welcome to the Broover Network</h1>
        <p>Experience the beauty of modern design and technology.</p>
      </div>
    </div>
  );
};

export default App;