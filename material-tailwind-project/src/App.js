import React, { useState, useEffect } from 'react';
import { DefaultSidebar } from "./sidebar";
import { MessageDialog } from './message';
import { CardGrid } from './CardGrid';
import { Button } from "@material-tailwind/react";

export default function App() {


  // const [role, setRole] = useState(null);  // New state variable for role
  const [cards, setCards] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);  // New state for pagination


  const handleCloseModal = (card) => {
    setIsModalOpen(false);
    if (card) {
      setCards(prevCards => [...prevCards, card]);
    }
  };

  useEffect(() => {
    if (hasMore) {  // Only fetch if there are more posts to fetch
      fetch('/api/posts/')
        .then(response => response.json())
        .then(data => {
          setCards(prevCards => [...data.posts]);  // Append new posts to existing posts
          setHasMore(data.has_more);  // Update hasMore state
        })
        .catch(error => console.error('Error:', error));
    }
  }, [hasMore]);  // Dependency array, will refetch when hasMore changes

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
  }

  // if (role === null) {
  //   return (
  //     <div className="login-page">
  //       <Button onClick={() => handleRoleSelect('admin')}>Admin</Button>
  //       <Button onClick={() => handleRoleSelect('user')}>User</Button>
  //     </div>
  //   )
  // }

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
