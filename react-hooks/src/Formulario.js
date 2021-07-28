import React from 'react';

const Form = () => {
  const [nome, setNome] = React.useState('');

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
      <button>Pokémon, eu escolho você!</button>
    </form>
  );
};

export default Form;
