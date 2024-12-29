import React from 'react';

const Home: React.FC = () => {
  const handleClick = () => {
    alert('Кнопка нажата!');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Добро пожаловать на нашу домашнюю страницу!</h1>
      <p>Это простая страница, созданная с использованием React и TypeScript.</p>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Нажми меня
      </button>
    </div>
  );
};

export default Home;