import React from 'react';

const Form = () => {
  const [nome, setNome] = React.useState('');

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

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="Qual Pokémon?"></label>
      <input
        type="text"
        name="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <div>
        <button onClick={handleclick}>Pokémon, eu escolho você!</button>
        {carregando && <p>Carregando...</p>}
      </div>
    </form>
  );
};

export default Form;
