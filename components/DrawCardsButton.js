import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const DrawCardsButton = (props) => {

    const handleDrawCardsClick = () =>{
        // Draw cards
        let card1 = (props.deck)[0]
        let card2 = (props.deck)[1]
        props.setDeck(props.deck.slice(2))
        props.setHand([card1, card2])


        // Reset player guess
        props.setIsCorrect(false)
        props.setPlayerAnswer('')
        props.setHasGuessed(false)
    }

  return (
      <Button
          id="draw-button"
          onClick={handleDrawCardsClick}
          isDisabled={!props.hasGuessed}
      >
          Draw Cards
      </Button>
  );
};

export default DrawCardsButton;