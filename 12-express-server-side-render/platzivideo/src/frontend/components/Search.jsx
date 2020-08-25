import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
  return (
    <section className='search'>
      <div className='search--container'>
        <h1 className='search--title'>¿Que quieres ver hoy?</h1>
        <input className='search--input' type='text' placeholder='Buscar...' />
      </div>
    </section>
  );
};

export default Search;
