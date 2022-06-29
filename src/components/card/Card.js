import React from 'react'
import styled from 'styled-components'

export const Card = styled.div`
  width: ${(props) => props.width};
  color: ${(props) => props.color};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.size};
  border: ${(props) => props.border};
  border-radius: 10px;
  height: ${(props) => props.height};
  background: ${(props) => props.bg};
  background-image: ${(props) => props.backgroundImage};
  background-color: ${(props) => props.backgroundColor};

  
`

