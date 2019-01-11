import React from 'react'
import { Glyphicon } from 'react-bootstrap'
import {Row, Col} from 'react-bootstrap'

export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px'
  };
  const style1 = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };
  var average = ""; 
  if(props.movie.rating.average!== null){
      average=props.movie.rating.average.toString() + "   ";
  }
  console.log(props);
    return(
      <div style={style}>
        <Row>
        <h1 style={style1}> {props.movie.name} </h1>
        </Row>
        <Row>
          <Col xs={4}>
            <h4>Date de Sortie :  {props.movie.premiered?props.movie.premiered:0}</h4>
          </Col>
          </Row>
          <Row>
          <Col xs={4}>
          <h4 ><Glyphicon glyph="star" />  Rating : {average?average : "NAN"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          <h4 >  Length : {props.movie.runtime?props.movie.runtime:"NAN"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          <h4 >  Type : {props.movie.type?props.movie.type : "NAN"}</h4>
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
          <h4 >  Genres : {props.movie.genres["0"]?props.movie.genres["0"] : "NAN"}&nbsp;&nbsp;{props.movie.genres["1"]}&nbsp;&nbsp;{props.movie.genres["2"]}</h4>
          </Col>
        </Row>
        <Row>
        <div>
      <h3>Overview</h3>
        {props.movie.summary}
    </div>
        </Row>
      </div>
    );
}
