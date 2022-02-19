import React from "react";
import CheckAnswerButton from "./CheckAnswerButton";
import {
    FormControl,
    NumberInput, Flex, FormLabel, Box
} from '@chakra-ui/react'

const PlayerInput = ({
                         correctAnswer,
                         hand,
                         playerAnswer,
                         score,
                         setIsCorrect,
                         setPlayerAnswer,
                         setScore,
                         hasGuessed,
                         setHasGuessed
                     }) => {
    return (
        <Flex width="full"
              align="center"
              justifyContent="center">

        </Flex>
    )
}

export default PlayerInput;
