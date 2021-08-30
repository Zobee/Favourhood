import styled from "styled-components";

export const DividerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
`

export const Wave = styled.svg`
  position: relative;
  display: block;
  width: calc(216% + 1.3px);
  height: 146px;
`

export const WavePath = styled.path`
  fill: ${({color}) => (color)}
`