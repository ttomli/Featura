import React, { useState, useEffect } from 'react';
import { DefaultSidebar } from "./sidebar";
import { MessageDialog } from './message';
import { CardGrid } from './CardGrid';

export default function App() {


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

  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/posts/')  // replace with your actual API endpoint
  //     .then(response => {
  //       console.log(response)
  //       response.json()
  //     })
  //     .then(data => {
  //       console.log(data)
  //       const transformedData = data.map(post => ({
  //         title: post.title,  // Adjust these properties according to your actual API response structure
  //         description: post.content // Adjust these properties according to your actual API response structure
  //       }));
  //       setCards(transformedData);
  //       setLoading(false);
  //     })
  //     .catch(error => console.error('Error:', error));
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  useEffect(() => {
    if (hasMore) {  // Only fetch if there are more posts to fetch
      fetch('http://127.0.0.1:8000/api/posts/')
        .then(response => response.json())
        .then(data => {
          setCards(prevCards => [...prevCards, ...data.posts]);  // Append new posts to existing posts
          setHasMore(data.has_more);  // Update hasMore state
        })
        .catch(error => console.error('Error:', error));
    }
  }, [hasMore]);  // Dependency array, will refetch when hasMore changes


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
