import { useState, useEffect } from 'react';

const useMoreContent = (content: [], contentPerGroup: number = 10) => {
  // Setup handler cards to show
  const [contentToShow, setContentsToShow] = useState([]);
  const [next, setNext] = useState(contentPerGroup);
  const loopWithSlice = (start: number, end: number) => {
    const slicedPosts = [...content].slice(start, end);
    setContentsToShow([...contentToShow, ...slicedPosts]);
  };
  const isMore = contentToShow.length < content.length;

  // Use Effect
  useEffect(() => {
    loopWithSlice(0, contentPerGroup);
  }, []);

  const handleShowMoreContent = () => {
    loopWithSlice(next, next + contentPerGroup);
    setNext(next + contentPerGroup);
  };

  return { contentToShow, handleShowMoreContent, isMore };
};

export default useMoreContent;
