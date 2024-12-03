import React from 'react';
import { Link } from 'react-router-dom';
import './GameCarousel.css';

interface Game {
  title: string;
  description: string;
  path: string;
}

const games: Game[] = [
  {
    title: 'Statesmanship',
    description: 'Test your knowledge of U.S. states',
    path: '/statesmanship/play'
  }
  // Add more games here in the future
];

export const GameCarousel: React.FC = () => {
  return (
    <div className="game-carousel">
      <div className="carousel-container">
        {games.map((game, index) => (
          <Link key={index} to={game.path} className="game-card">
            <div className="game-card-content">
              <h2>{game.title}</h2>
              <p>{game.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
