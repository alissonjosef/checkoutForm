import { Box, Button, Flex, Link, Text, Textarea } from "@chakra-ui/react"
import { BsBoxSeam } from 'react-icons/bs'
import { CheckBoxActive } from "../../components/CheckBoxActive"
import { Count } from "../../components/Count"
import { useState } from "react"


export const CheckoutForm = () => {
    const [] = useState('')
    return (
        <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center' >
            <Flex as='form' width='100%' maxWidth={390} bg='white' borderRadius={8} flexDirection='column' boxShadow='10px 9px 28px -3px rgba(0,0,0,0.75)'>
                <Box>
                    <Box
                        bg='#2F3575'
                        p='6'
                        borderRadius='0.5rem 0.5rem 0 0'
                        display='flex'
                        justifyContent='space-between'
                        width='100%'>
                        <Text
                            color='white'
                            fontSize={18}>
                            Formulário <br /> para compra de <br /><strong>Pacote de adesivo.</strong>
                        </Text>
                        <BsBoxSeam size={85} color="#191847" />
                    </Box>
                </Box>

                <Box p='6'>
                    <CheckBoxActive />

                </Box>
                <Box pl='6' pr='6'>
                    <Text fontWeight='bold'>
                        Quantos adesivos de cada?
                    </Text>

                    <Count />
                </Box>

                <Box pl={6} pr={6} mb={2} mt={4}>
                    <Text fontWeight='bold'>
                        Observação:
                    </Text>
                    <Box>
                        <Textarea
                            mt={2}
                            bg='#DDE3E8'
                            placeholder='Alguma dúvida? Recado?' />
                    </Box>
                </Box>

                <Box mt={2}
                    display='flex'
                    borderRadius='0 0 0.5rem 0.5rem'
                    justifyContent='end'
                    alignItems='center'
                    h='4rem'
                    pr='6'
                    bg='#DDE3E8'
                >

                    <Button as={Link}
                        href="/payment"
                        colorScheme='facebook'>Proximo</Button>
                </Box>
            </Flex>
        </Flex>
    )
}