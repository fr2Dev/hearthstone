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

  const resetContent = (initContent: []) => {
    const slicedPosts = [...initContent].slice(0, contentPerGroup);
    setContentsToShow([...slicedPosts]);
  };

  const handleShowMoreContent = () => {
    loopWithSlice(next, next + contentPerGroup);
    setNext(next + contentPerGroup);
  };

  const handleShowAll = () => setContentsToShow(content);

  return { contentToShow, resetContent, handleShowMoreContent, handleShowAll, isMore };
};

export default useMoreContent;
