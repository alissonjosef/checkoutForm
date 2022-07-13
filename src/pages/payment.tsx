import { Flex, Button, Box, Text, Tab, TabList, TabPanel, TabPanels, Tabs, Link, FormControl, Image, FormLabel, Input, Icon, useToast, InputGroup, InputRightElement } from "@chakra-ui/react"
import { BsBoxSeam } from "react-icons/bs"
import { TimeIcon } from "@chakra-ui/icons"
import { SetStateAction, useState } from "react"
import copy from "copy-to-clipboard"
import FormCard from "../components/FormCard"

export default function Payment() {
    const toast = useToast()
    const keyPix = '25489385953282280213042552100532827638285537563146'
    const [copyText, setCopyText] = useState(keyPix)

    const handleCopyText = (e: { target: { value: SetStateAction<string> } }) => {
        setCopyText(e.target.value);
    }

    const copyToClipboard = () => {
        copy(copyText);
        toast({
            title: `${copyText}`,
            status: 'success',
            duration: 1000,
            isClosable: true,
            position: 'top',
        }
        )
    }

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
                        Formulário <br /> para compra de <br /><strong>Pacote de adesivo.</strong>
                    </Text>
                    <BsBoxSeam size={85} color="#191847" />
                </Box>

                <Box mt={3} pl={6} pr={6}>
                    <Text fontWeight='bold'>
                        Forma de Pagamento
                    </Text>

                    <Tabs>
                        <TabList>
                            <Tab>Cartão</Tab>
                            <Tab>Pix</Tab>
                            <Tab>Boleto</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                    <FormCard />
                            </TabPanel>
                            <TabPanel>
                                <Text fontWeight='bold'>Escaneie este código para pagar</Text>
                                <Flex flexDirection='column'>
                                    <Text>
                                        <strong>1.</strong> Acesse seu Internet Banking ou app de pagamentos.
                                    </Text>

                                    <Text>
                                        <strong>2.</strong> Escolha pagar via Pix..
                                    </Text>

                                    <Text>
                                        <strong>3.</strong> Escaneie o seguinte código:
                                    </Text>
                                    <Flex w='100%' justifyContent='center'>
                                        <Image boxSize={150} src='https://upload.wikimedia.org/wikipedia/commons/5/5b/Qr-1.png' alt='Dan Abramov' />
                                    </Flex>
                                </Flex>
                                <Box display='flex' alignItems='center'>
                                    <Icon mr={2}><TimeIcon /></Icon>
                                    <Text>
                                        Pague e será creditado na hora
                                    </Text>
                                </Box>

                                <InputGroup size='md' mt={2}>
                                    <Input
                                        pr='4.5rem'
                                        type='text'
                                        value={copyText}
                                        onChange={handleCopyText}
                                    />
                                    <InputRightElement width='4.5rem'>
                                        <Button h='1.75rem' size='sm' onClick={copyToClipboard}>
                                            Copiar
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                            </TabPanel>
                            <TabPanel>
                                <Box>
                                    <Text fontWeight='bold'>
                                        Você tem até sexta-feira para pagar
                                    </Text>
                                    <Box w='100%'>
                                        <Image src='http://gbnet.com.br/v2/images/barcode_codabar.png' alt='Dan Abramov' />
                                    </Box>
                                    <Text fontWeight='bold'>
                                        817700000 0 01093659970 2 416555998 8 000143370831 8
                                    </Text>

                                </Box>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </Box>

                <Box
                    display='flex'
                    borderRadius='0 0 0.5rem 0.5rem'
                    justifyContent='end'
                    alignItems='center'
                    h='4rem'
                    pr='6'
                    bg='#DDE3E8'
                >
                    <Box w='100%' pl={6} display='flex' flexDirection='row' justifyContent='space-between'>
                        <Button as={Link} href="/" colorScheme='facebook'>Voltar</Button>
                        <Box>
                            <Button colorScheme='facebook'
                                as={Link}
                                href="/paymentCompleted"
                                onClick={() =>
                                    toast({
                                        title: 'Account created.',
                                        status: 'success',
                                        duration: 9000,
                                        isClosable: true,
                                        position: 'top',
                                    }
                                    )}
                            >
                                Enviar
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Flex>
        </Flex >
    )
}