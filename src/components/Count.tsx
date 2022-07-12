import { Box, Button, Text } from "@chakra-ui/react"
import { useState } from "react"

export const Count = () => {
    const [cont, setCont] = useState(0)

    function increase() {
        setCont(cont + 1)
    }

    function decrease() {
        
        if (cont <= 0) {
            return 0
        } else
            setCont(cont - 1)
       
    }
;
return (
    <Box display='flex' flexDirection='row' mt={6}>
        <Button colorScheme='facebook' onClick={decrease}>-</Button>
        <Box display='flex' justifyContent='center' alignItems='center' mr={6} ml={6}>
            <Text>{cont}</Text>
        </Box>
        <Button colorScheme='facebook' onClick={increase}>+</Button>
    </Box>
)
}