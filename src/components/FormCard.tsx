import { Flex, FormLabel, Input, FormControl } from "@chakra-ui/react"
import { useForm } from "react-hook-form"

export default function FormCard() {
    const { register, handleSubmit } = useForm()

    const onSubmit = (e: any) => {
    }
    return (
        <Flex flexDirection='column'>
            <FormControl isRequired onChange={handleSubmit(onSubmit)}>
                <FormLabel htmlFor='number'>Numero do Cartão</FormLabel>
                <Input id='number' type='number' placeholder='1233 2223 4443 1111' {...register("number")}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='name'>Nome</FormLabel>
                <Input id='name' type='text' {...register("name")} />
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='validation'>Validade</FormLabel>
                <Input id='validation' type='text' placeholder='05/25' {...register("validation")}/>
            </FormControl>

            <FormControl isRequired>
                <FormLabel htmlFor='ccv'>CCV</FormLabel>
                <Input id='ccv' type='number' {...register("ccv")}/>
            </FormControl>
        </Flex>
    )
}