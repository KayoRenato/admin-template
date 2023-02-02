type typeInput = 'text' | 'password' | 'email'

interface AuthProps {
    type: typeInput
    label: string
    placeholder: string
    value?: any
    isRequired?: boolean
    onChange?: (newValue: any) => void

}

export default function AuthInput(props: AuthProps) {
    return (
        <div className={
            `
            flex flex-col
            mt-4
            `
        }>
            <label className={
                `
                text-base
                text-gray-700
                ml-2
                `
            }>{props.label}</label>
            <input className={
                `
                bg-gray-100
                mt-2
                h-11
                p-4
                rounded-md
                border-2 border-gray-300 focus:border-blue-700  focus:bg-white
                focus: outline-none
         
                `
            }
                type={props.type}
                required={props.isRequired}
                value={props.value}
                onChange={event => props.onChange?.(event.target.value)}
                placeholder={props.placeholder}
            />
        </div>
    )
}