import React from 'react'
import request from '../../../utils/requset'
import Row from '../Row/Row'
function RowList() {
  return (
    <div>
        <Row title="NetFlix Orginales" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}/>
        <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
        <Row title="Top Rating" fetchUrl={request.fetchTopRated}/>
        <Row title="movie horror" fetchUrl={request.fetchHorrorMovies}/>
        <Row title="movie Comedy" fetchUrl={request.fetchComedyMovies}/>
        <Row title="movie Actions" fetchUrl={request.fetchActionMovies}/>
        <Row title="movie Romantics" fetchUrl={request.fetchRomanceMovies}/>
        <Row title="movie Documentary" fetchUrl={request.fetchDocumentaries}/>
        <Row title="Tv Show" fetchUrl={request.fetchTvShow}/>
    </div>
  )
}

export default RowList