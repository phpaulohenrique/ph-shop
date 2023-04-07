import { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form/dist/types'
import { ErrorMessage, InputContainer, InputStyle } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string
    label?: string
    error?: FieldError
}

export const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    { name, label, error = null, ...rest },
    ref
) => {
    return (
        <InputContainer>
            {!!label && <label htmlFor={name}>{label}</label>}
            <InputStyle
                name={name}
                id={name}
                // focusBorderColor="pink.500"
                // bgColor="gray.900"
                // variant="filled"
                // _hover={{
                //     bgColor: "gray.900",
                // }}
                // size="lg"
                ref={ref}
                {...rest}
            />
            {!!error && <ErrorMessage>*{error.message}</ErrorMessage>}
        </InputContainer>
    )
}

export const Input = forwardRef(InputBase)
