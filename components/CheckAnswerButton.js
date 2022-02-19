import React from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react'

const CheckAnswerButton = ({
                               correctAnswer,
                               playerAnswer,
                               score,
                               setIsCorrect,
                               setScore,
                               hasGuessed,
                               setHasGuessed
                           }) => {

    function handleCheckProductClick(e) {
        e.preventDefault()

        if (Number(playerAnswer) === correctAnswer) {
            setScore(score + 1)
            setIsCorrect(true)
            setHasGuessed(true)
        }

    }

  return (
      <Button id="check-button"
              isDisabled={playerAnswer.length<1 || hasGuessed===true}
              onClick={handleCheckProductClick}
              width="full"
              mt={4}
      >
          Check Answer
      </Button>
  );
};

export default CheckAnswerButton;