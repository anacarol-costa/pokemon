import React from 'react';

const Button = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleclick(event) {
    setCarregando(true);
    const Response = await fetch(
      `https://pokeapi.co/api/v2/${event.target.innerText}`,
    );
    const json = await Response.json();
    setDados(json);
    setCarregando(false);
  }

  return (
    <div>
      <button onClick={handleClick}>Pokémon, eu escolho você!</button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Pokemon dados={dados} />}
    </div>
  );
};

export default Button;
