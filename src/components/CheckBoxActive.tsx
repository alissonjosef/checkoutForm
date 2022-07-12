import { Stack, Checkbox, Box, Text } from "@chakra-ui/react"


export const CheckBoxActive = () => {
    return (
        <>
            <Box mb={5}>
                <Text fontWeight='bold'>Quais adesivos:</Text>
            </Box>

            <Stack spacing={2} direction='column'>
                <Checkbox colorScheme='facebook'>
                    React
                </Checkbox>
                <Checkbox colorScheme='facebook'>
                    Vue
                </Checkbox>
                <Checkbox colorScheme='facebook'>
                    Angular
                </Checkbox>
            </Stack>
        </>
    )
}