import React from 'react';
import {Flex, Text} from "@chakra-ui/react";

const RoundResult = ({isCorrect, hasGuessed, correctAnswer}) => {
    let wrongResultText = `:( The correct answer was ${correctAnswer} Try again!`
    if (hasGuessed) {
        return (
            <Flex
                width="100%">
                    <Text
                        size="xl"
                    >
                    {isCorrect ? 'Correct!' : wrongResultText}</Text>
            </Flex>
        )
    } else {
        return null;
    }
}

export default RoundResult;