import React, { useState } from 'react';
import { DefaultSidebar } from "./sidebar";
import { MessageDialog } from './message';
import { CardGrid } from './CardGrid';

export default function App() {


  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = (card) => {
    setIsModalOpen(false);
    if (card) {
      setCards(prevCards => [...prevCards, card]);
    }
  };


  return (
    <div className="relative flex min-h-screen w-full p-8">
      <DefaultSidebar onAddCard={() => setIsModalOpen(true)} />
      {isModalOpen && <MessageDialog onClose={handleCloseModal} />}
      <div className="content-area flex-grow p-8 overflow-y-auto max-h-screen">
        <CardGrid cards={cards} />
      </div>
    </div>
  );
}
