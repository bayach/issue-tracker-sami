'use client'
import { TextField } from '@radix-ui/themes'
import { TextArea} from '@radix-ui/themes'
import { Button } from '@radix-ui/themes'
import React from 'react'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root>
            <TextField.Input placeholder='Title'/>
        </TextField.Root>
        <TextArea placeholder="description" />
        <Button> Submit new Issues</Button>
    </div>
    
  )
}

export default NewIssuePage