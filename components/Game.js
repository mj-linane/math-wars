import React, {useEffect, useState} from "react";
import Hand from "./Hand";
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading, Input, NumberInput
} from "@chakra-ui/react";
import ScoreBar from "./ScoreBar";
import RoundResult from "./RoundResult";

const DECK = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10]

const Game = () => {
    const [deck, setDeck] = useState([])
    const [hand, setHand] = useState([])
    const [score, setScore] = useState(0)
    const [playerAnswer, setPlayerAnswer] = useState('')
    const [isCorrect, setIsCorrect] = useState(false)
    const [hasGuessed, setHasGuessed] = useState(false)
    const [correctAnswer, setCorrectAnswer] = useState(null)


    const drawCards = () => {
        // Draw cards
        let card1 = (deck)[0]
        let card2 = (deck)[1]
        setDeck(deck.slice(2))
        setHand([card1, card2])


        // Reset player guess
        setIsCorrect(false)
        setPlayerAnswer('')
        setHasGuessed(false)
    }

    /**
     * @param {number[]} array
     */
    const shuffle = (array) => {
        let tempArray = []
        while (array.length > 0) {
            let randomIndex = Math.floor(Math.random() * array.length)
            tempArray.push(array[randomIndex])
            array.splice(randomIndex, 1)
        }
        return tempArray
    };

// Shuffle the deck at the start of the game
    useEffect(() => {
        setDeck(shuffle(DECK))
    }, [])

    // Calculate answer on card value changes
    useEffect(() => {
        setCorrectAnswer(hand[0] * hand[1])
    }, [hand])

/* EVENT LISTENERS */
    const handleKeyPress = e =>{
        if(e.key === 'Enter'){
            handleCheckProductClick()
        }
    }

    const handleDrawCardsClick = () => {
        drawCards();
    }

    const handleInputChange = (e) => setPlayerAnswer(e.target.value);

    const handleCheckProductClick = () => {
        if (Number(playerAnswer) === correctAnswer) {
            setScore(score + 1)
            setIsCorrect(true)
            setHasGuessed(true)
        } else{
            setIsCorrect(false)
            setHasGuessed(true)
        }

        drawCards()
    };


    return (
        <Flex width="full"
              align="center"
              justifyContent="center"
              borderRadius="lg"
              bg="white"
              direction="column"
              p="4em"
        >
            <Box p={2}>
                <Box textAlign="center">
                    <Heading>
                        Math Wars: Multiply!
                    </Heading>
                </Box>
            </Box>
            <Flex
                p="4em"
                m="4em"
                direction="column"
                backgroundColor="green.300"
                borderRadius={10}
                alignItems="center"
                justifyContent="center"
                width="80%"
            >
                <Button
                    onClick={handleDrawCardsClick}
                    width="50%"
                    is
                >
                    Start Game
                </Button>

                <Hand
                    cardOne={hand[0]}
                    cardTwo={hand[1]}
                />

                <Flex
                    alignItems="center"
                    justifyContent="center"
                    alignContent="center"
                    width="100%"
                    m={8}>
                    <FormControl
                        width="30%"
                        mx={4}
                    >
                        <Input
                            min={0}
                            max={9}
                            type="number"
                            placeholder="Answer"
                            backgroundColor="white"
                            textAlign="center"
                            value={playerAnswer}
                            onKeyPress={handleKeyPress}
                            onChange={handleInputChange}
                        />
                    </FormControl>
                    <Button
                            isDisabled={playerAnswer.length<1 || hasGuessed===true}
                            onClick={handleCheckProductClick}
                    >
                        Check Answer
                    </Button>
                </Flex>
                <RoundResult
                    isCorrect={isCorrect}
                    hasGuessed={hasGuessed}
                    score={score}
                    correctAnswer={correctAnswer}
                />
                <ScoreBar
                    score={score}
                />
            </Flex>
        </Flex>
    )
}

export default Game