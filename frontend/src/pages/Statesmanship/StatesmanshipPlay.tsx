import React, { useState, useEffect } from 'react';
import './Statesmanship.css';
import { StateData, getRandomState, isValidStateName, STATE_NAMES, getNextHint } from '../../data/states';

export const StatesmanshipPlay: React.FC = () => {
  const [currentState, setCurrentState] = useState<StateData | null>(null);
  const [guessCount, setGuessCount] = useState(0);
  const [guess, setGuess] = useState('');
  const [gameStatus, setGameStatus] = useState<'playing' | 'won' | 'lost'>('playing');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);
  const [isAnimating, setIsAnimating] = useState(false);
  const maxGuesses = 4;

  interface GameTurn {
    hint: string;
    guess?: string;
    animationState?: string;
  }
  
  const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);

  useEffect(() => {
    resetGame();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGuess(value);
    setSelectedIndex(-1);
    
    if (value.trim()) {
      const filtered = STATE_NAMES.filter(state =>
        state.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > -1 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex]);
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSuggestionClick = (state: string) => {
    setGuess(state);
    setSuggestions([]);
    setShowSuggestions(false);
    setSelectedIndex(-1);
  };

  const handleGuess = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!guess.trim() || !currentState || isAnimating || gameStatus !== 'playing') return;
    
    const normalizedGuess = guess.trim();
    const currentTurn = guessCount;
    
    setIsAnimating(true);
    
    try {
      // Update the current turn with the guess
      setGameTurns(prev => {
        const updated = [...prev];
        if (updated[currentTurn]) {
          updated[currentTurn] = {
            ...updated[currentTurn],
            guess: normalizedGuess,
            animationState: 'start'
          };
        }
        return updated;
      });

      await new Promise(resolve => setTimeout(resolve, 300));

      setGameTurns(prev => {
        const updated = [...prev];
        if (updated[currentTurn]) {
          updated[currentTurn] = {
            ...updated[currentTurn],
            animationState: 'shake'
          };
        }
        return updated;
      });

      await new Promise(resolve => setTimeout(resolve, 500));

      if (normalizedGuess.toLowerCase() === currentState.name.toLowerCase()) {
        setGameStatus('won');
      } else {
        const nextGuessCount = guessCount + 1;
        setGuessCount(nextGuessCount);
        
        setGameTurns(prev => {
          const updated = [...prev];
          if (updated[currentTurn]) {
            updated[currentTurn] = {
              ...updated[currentTurn],
              animationState: 'slide'
            };
          }
          return updated;
        });

        await new Promise(resolve => setTimeout(resolve, 500));
        
        if (nextGuessCount < maxGuesses) {
          const nextHint = getNextHint(currentState, normalizedGuess, nextGuessCount);
          setGameTurns(prev => [...prev, { 
            hint: nextHint,
            animationState: 'fade-in'
          }]);
        }
        
        if (nextGuessCount >= maxGuesses) {
          setGameStatus('lost');
        }
      }

      await new Promise(resolve => setTimeout(resolve, 300));
    } finally {
      setGuess('');
      setSuggestions([]);
      setShowSuggestions(false);
      setIsAnimating(false);
    }
  };

  const resetGame = () => {
    const newState = getRandomState();
    setCurrentState(newState);
    setGuessCount(0);
    setGuess('');
    setGameStatus('playing');
    setSuggestions([]);
    setShowSuggestions(false);
    setSelectedIndex(-1);
    setIsAnimating(false);
    if (newState) {
      setGameTurns([{ 
        hint: newState.hints.first,
        animationState: 'fade-in'
      }]);
    }
  };

  if (!currentState) return <div>Loading...</div>;

  return (
    <div className="statesmanship-play">
      <h2>Statesmanship</h2>
      
      <div className="game-status">
        <p>Guesses remaining: <span className="guesses-remaining" data-guesses={maxGuesses - guessCount}>{maxGuesses - guessCount}</span></p>
      </div>

      <div className="turns-section">
        {gameTurns.map((turn, index) => (
          <div key={index} className="turn-container">
            <div className={`game-item hint-item ${turn.animationState === 'fade-in' ? 'fade-in' : ''}`}>
              {turn.hint}
            </div>
            {turn.guess && (
              <div className={`game-item guess-item ${
                currentState && turn.guess.toLowerCase() === currentState.name.toLowerCase() 
                  ? 'correct' 
                  : 'incorrect'
                } ${turn.animationState || ''}`}
              >
                {turn.guess}
              </div>
            )}
          </div>
        ))}
        {gameStatus === 'playing' && !isAnimating && (
          <form onSubmit={handleGuess} className="guess-form">
            <div className="autocomplete-container">
              <input
                type="text"
                value={guess}
                onChange={handleInputChange}
                onKeyDown={handleKeyDown}
                placeholder="Guess which state..."
                className="guess-input"
                disabled={gameStatus !== 'playing'}
              />
              {showSuggestions && suggestions.length > 0 && (
                <ul className="suggestions-list">
                  {suggestions.map((state, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(state)}
                      className={`suggestion-item ${index === selectedIndex ? 'selected' : ''}`}
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <button 
              type="submit" 
              className="rustic-button"
              disabled={!isValidStateName(guess) || gameStatus !== 'playing'}
            >
              Submit Guess
            </button>
          </form>
        )}
      </div>

      {gameStatus !== 'playing' && (
        <div className="game-over-overlay">
          <div className={`game-over-content ${gameStatus}`}>
            <div className="game-over-title">
              {gameStatus === 'won' ? `${currentState?.name}!` : 'You suck Katie. WTF'}
            </div>
            <div className="game-over-message">
              {gameStatus === 'won' 
                ? `You are not dumb` 
                : `The correct answer was ${currentState?.name}.`}
            </div>
            <button className="play-again-button" onClick={resetGame}>
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
