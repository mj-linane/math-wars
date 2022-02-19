import React from 'react';
import {Flex, Text} from "@chakra-ui/react";

const Card = ({number}) => (
    <Flex
        width="40%"
        align="center"
        m={30}
        minH="6em"
        minW="2em"
        justifyContent="center"
        backgroundColor="white"
        borderRadius={10}>
        <Text
            fontSize="8xl"
        >{number}</Text>
    </Flex>
);

export default Card;
