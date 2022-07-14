import React, { useEffect, useState } from "react";
import Loading from "../icons/Loading";
import Table from "./Table";

const SearchCandicates = () => {
  // states required for initial render
  const [isFetching, setIsFetching] = useState(true);
  const [canditates, setCanditates] = useState([]);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [error, setError] = useState(null);
  // states for posting offer or reject
  const [canditatesIdsToSend, setCanditatesIdsToSend] = useState([]);

  // function for fetching canditates
  const fetchCanditates = async (url) => {
    setIsFetching(true);
    setNext(null);
    setPrev(null);

    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    if (data) {
      setCanditates(data.results);
      setIsFetching(false);
      if (data.next) {
        setNext(data.next);
      } else if (data.previous) {
        setPrev(data.previous);
      }
    }
  };
  // END function for fetching canditates

  // function for handling pagination
  const handlePaginate = (url) => {
    // unmounting offerall and rejectall ui
    setCanditatesIdsToSend([]);
    try {
      fetchCanditates(url);
    } catch (error) {
      console.log(error);
    }
  };
  // END function for handling pagination

  useEffect(() => {
    try {
      fetchCanditates("https://heinhtetnyi.pythonanywhere.com/juncture/cv/");
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {error ? (
        <div>{error.message}</div>
      ) : isFetching ? (
        <Loading />
      ) : (
        <Table
          canditates={canditates}
          setCanditates={setCanditates}
          prev={prev}
          next={next}
          handlePaginate={handlePaginate}
          // props for offer or reject
          canditatesIdsToSend={canditatesIdsToSend}
          setCanditatesIdsToSend={setCanditatesIdsToSend}
        />
      )}
    </div>
  );
};

export default SearchCandicates;
