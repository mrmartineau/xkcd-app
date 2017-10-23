import React from 'react'
import styled, { keyframes } from 'react-emotion'
import { ds } from '../../theme'

const XKCD = styled('div')`
  position: relative;
  border-radius: 10px;
  border: ${ds.get('border.default')};
  margin: 0 auto ${ds.spacing(2)};
  padding: ${ds.spacing(4)};
  background-color: #fff;
  min-height: 200px;
`

const Image = styled('img')`
  display: block;
  width: 100%;
`

const Title = styled('h2')`
  text-align: left;
`

const Description = styled('p')`
  margin: 0;
  text-align: left;
`

const ComicDate = styled('time')`
  font-size: small;
  color: ${ds.color('text', 'light')};
`

const scaleout = keyframes`
  0% {
    transform: scale(0);
  } 100% {
    transform: scale(1);
    opacity: 0;
  }
`

const Loading = styled('div')`
  position: absolute;
  top: 50%;
  left 50%;
  width: 40px;
  height: 40px;
  margin: -20px 0 0 -20px;
  background-color: #ddd;

  border-radius: 100%;
  animation: ${scaleout} 1.0s infinite ease-in-out;
`

const XKCDCard = props => {
  return (
    <XKCD>
      {props.loading ? (
        <Loading />
      ) : (
        <div>
          <Image src={props.src} />
          <Title>{props.title}</Title>
          <Description>{props.description}</Description>
          <ComicDate>{`${props.day}/${props.month}/${props.year}`}</ComicDate>
        </div>
      )}
    </XKCD>
  )
}

export default XKCDCard
