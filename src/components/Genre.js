import React from 'react'

export default function Genre() {
    const { data:books, loading, error, refetch } = useFetch(
        "http://localhost:8002/books"
      );
      if (loading) return <h1> LOADING...</h1>;
      if (error) console.log(error);
  return (
    <div>Genre</div>
  )
}
