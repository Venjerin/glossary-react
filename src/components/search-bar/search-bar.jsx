import React, { useEffect, useRef, useState } from 'react';
import { data } from '../../data';
import s from './search-bar.module.css'

const SearchBar = ({setSelectedTerm, terms}) => {
  const [searchQuery, setSearchQuery] = useState(''); // Введённый текст
  const [suggestions, setSuggestions] = useState([]); // Подсказки
  const [firstClick, setFirstClick] = useState(false);

  const sortedData = terms
    .filter((term) => data.some((item) => item.term === term))
    .map((term) => data.find((item) => item.term === term));

  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filteredSuggestions = data.filter((item) =>
      item.term.toLowerCase().includes(query.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleListClick = (suggestion) => {
    setSelectedTerm(suggestion);
    setSearchQuery('');
    setFirstClick(false);
  };

  const suggestionsRef = useRef(null);
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(e.target)) {
        setSearchQuery("");
        setFirstClick(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <div className={s.search_container} ref={suggestionsRef}>
      <input
        type="text"
        placeholder="Введите термин..."
        value={searchQuery}
        onChange={handleInputChange}
        className={s.input}
        onClick={() => {setSuggestions(sortedData); setFirstClick(true)}}
      />
      {searchQuery || firstClick ? (
        <ul className={s.suggestions}>
          {suggestions.map((suggestion, index) => (
            <li key={index} className={s.suggestion} onClick={() => handleListClick(suggestion)}>{suggestion.term}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default SearchBar;

