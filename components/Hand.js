import React from "react";
import Card from "./Card";
import {Box, Flex, Heading} from "@chakra-ui/react";

const Hand = ({cardOne, cardTwo}) => {
    return (
        <Flex
            width="100%"
            direction="row"
            alignContent="center"
            justifyContent="center"
            alignItems="center"
        >
            <Card number={cardOne}/>
            <Box id="hand-content">
                <Heading>X</Heading>
            </Box>
            <Card number={cardTwo}/>
        </Flex>
    )
}

export default Hand