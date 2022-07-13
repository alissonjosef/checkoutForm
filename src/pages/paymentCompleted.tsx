import { CheckIcon } from "@chakra-ui/icons";
import { Flex, Button, Box,Text, Icon } from "@chakra-ui/react";
import Link from "next/link";
import { BsBoxSeam } from "react-icons/bs";


export default function PaymentComplete() {
    return (
        <Flex w='100vw' h='100vh' alignItems='center' justifyContent='center'>
            <Flex as='form' width='100%' maxWidth={390} bg='white' borderRadius={8} flexDirection='column' boxShadow='10px 9px 28px -3px rgba(0,0,0,0.75)'>
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
                            <strong>Em Preparação.</strong> <br />
                            Estamos preparando o seu pacote.
                        </Text>
                        <BsBoxSeam size={85} color="#191847" />
                    </Box>  

                <Box p='6' display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
                    <Icon color='green' m={5} w={8} h={8}><CheckIcon /></Icon>
                    <Text fontWeight='bold' textAlign='center'>
                        Compra efetuada com sucesso! Confira seu e-mail.
                    </Text>
                </Box>

                <Box w='100%' display='flex' mb={5} justifyContent='center'>
                        <Link href="/">
                            <Button colorScheme='facebook'>Inicio</Button>
                        </Link>
                    </Box>
            </Flex>
        </Flex>
    )
}