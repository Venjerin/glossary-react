import React, { useState } from 'react';
import s from './App.module.css'; // Импортируем модульные стили
import SearchBar from './components/search-bar/search-bar';
import { data } from './data';

type Term = {
  term: string;
  defenition: string;
  sourceUrl: string;
  addition?: string;
}

function App() {
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  const terms = data.map((item: Term) => item.term).sort();

  const handleTermClick = (term: string) => {
    const selected: Term | undefined = data.find((item: Term) => item.term === term);
    if (selected) {
      setSelectedTerm(selected);
    }
  };

  const handleSourceClick = (url: string) => {
    window.open(url, '_blank');
  }

  const TermList = () => (
    <ul className={s.termList}>
      <b className={s.termItem}>Список терминов:</b>
      {terms.map((term) => (
        <li className={s.termListItem} key={term} onClick={() => handleTermClick(term)}>
          <strong className={s.termItem}>{term}</strong>
        </li>
      ))}
    </ul>
  );

  const Term = () => (
    <div className={s.term}>
      <h2>
        {selectedTerm?.term}
        {selectedTerm?.addition && ` (${selectedTerm?.addition})`}
      </h2>
      <p className={s.termDetails}>{selectedTerm?.defenition}</p>
      <button
        className={s.termButton}
        onClick={() => selectedTerm?.sourceUrl && handleSourceClick(selectedTerm?.sourceUrl)}
      >
        Перейти на страницу источника
      </button>
      <button className={s.termButton} onClick={() => setSelectedTerm(null)}>
        Вернуться к списку
      </button>
    </div>
  );

  return (
    <div className={s.app}>
      <h1 className={s.title}>Фронтенд Глоссарий</h1>
      <SearchBar setSelectedTerm={setSelectedTerm} terms={terms}/>
      {selectedTerm ? Term() : TermList()}
    </div>
  );
}

export default App;

