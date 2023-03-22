import React, { useState } from 'react';
import MovingComponent from 'react-moving-text';
import { Header } from './header';
const AnimationsForChaining = ["effect3D"]

export const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0);
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0]);

  const handleChainAnimation = () => {
    setAnimationIndex(animationIndex+1);
    setAnimationType(selectedItems[animationIndex+1]);
  }

  return (
    <MovingComponent
    type="slideInFromBottom"
    duration="2000ms"
    delay="0s"
    direction="normal"
    timing="ease-in-out"
    iteration="1"
    fillMode="none">
    <Header/>
  </MovingComponent>
  )
}
