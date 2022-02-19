import React from "react";
import {Box, Flex, Progress} from "@chakra-ui/react";

export default function ScoreBar(props) {
    let scorePercent = Math.ceil(props.score/20 * 100)
    console.log(scorePercent)
    return (
        <Flex
            direction="column"
            align="center"
            justify="center"
            width="100%"
            m={5}
            id="score-bar">
            <Box>
                <h1>Your Score: {props.score} / 20</h1>
            </Box>
            <Progress
                value={scorePercent}
                m={5}
                size="lg"
                width="100%"
                color="red.500"/>
        </Flex>
    );
}
