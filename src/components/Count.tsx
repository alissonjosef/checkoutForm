import { Button, Text, Flex } from "@chakra-ui/react"
import { useState } from "react"

export const Count = () => {
    const [count, setCount] = useState(0)

    function increase() {
        setCount(count + 1)
    }

    function decrease() {

        const canDecrease = count > 0

        if (canDecrease) {
            setCount(count - 1)
        }

    }

    return (
        <Flex flexDirection='row' mt={6} gap={6} alignItems='center'>
            <Button colorScheme='facebook' onClick={decrease}>-</Button>
            <Text>{count}</Text>
            <Button colorScheme='facebook' onClick={increase}>+</Button>
        </Flex>
    )
}