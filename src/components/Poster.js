import React  from 'react';
import { Image } from 'react-bootstrap'
import styled from 'styled-components'
import { Glyphicon  } from 'react-bootstrap'

export default function Poster(props){

  const StyledImg = styled.div`
    &:hover .image{
       opacity:1;
    }
    &:hover .title{
       opacity: ${props.info ? 1:0};
       font-size : 18px;
    }
  `;
  const Info =  styled.div`
      position: absolute;
      top: 68%;
      margin:4px;
      color:white;
      font-weight:bold;
      opacity:0;
  `;
  return(
    <StyledImg>
      <Image className="image" key={props.id} src={props.path ? props.path.medium : "http://static.tvmaze.com/uploads/images/medium_portrait/6/16798.jpg"} responsive />
      {props.info &&
      <Info className="title">
        <h6>{props.title}</h6>
         &nbsp;&nbsp; {props.release_date.substring(0,4)}
      </Info>
      }
      
    </StyledImg>
  );
}
