import React from 'react'
import styled from 'react-emotion'
import { ds } from '../../theme'

const Container = styled('div')`
  display: flex;
  justify-content: space-between;
`

const Button = styled('button')`
  border: ${ds.get('border.default')};
  padding: ${ds.spacing(1)} 11px;
  border-radius: 0.5em;
  background-color: inherit;
  font-size: 15px;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.6);
  }
`

const XKCDCardPagination = ({ previous, random, next }) => {
  return (
    <Container>
      <Button onClick={previous}>Previous comic</Button>
      <Button onClick={random}>Random comic</Button>
      <Button onClick={next}>Next comic</Button>
    </Container>
  )
}

export default XKCDCardPagination
