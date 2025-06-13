import { IconLoader2 } from '@tabler/icons-react'
import React from 'react'

const Loading = () =>
{
    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <IconLoader2 className='mr-3 size-10 animate-spin' color='#4DA8DA' stroke={ 2 } />
        </div>
    )
}

export default Loading