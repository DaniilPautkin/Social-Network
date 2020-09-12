import React, { useState } from 'react'

export const useInput = (initialValue: any) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (event: React.FormEvent<EventTarget>) => {
        setValue((event.target as HTMLInputElement).value)
    }

    const clear = () => setValue('')

    return {
        bind: { value, onChange }, value, clear
    }
}