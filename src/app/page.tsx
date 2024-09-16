'use cliet'

import { DoubleArrowLeftIcon, DoubleArrowRightIcon, EnvelopeClosedIcon, EyeClosedIcon, LockClosedIcon } from '@radix-ui/react-icons';
import { Flex, Text, Button, Card, Box, Grid, Container, TextField, IconButton} from '@radix-ui/themes';
import { useState } from 'react';


export default function MyApp() {

  
  const [opened, setOpened] = useState('initialOpened');


  return (
  <Flex direction="column" justify={'center'} align={'center'} height={'100vh'} gap="2">
  <Card>
    <Flex justify={'center'} pt={'10px'}>
      <Text size={'5'} >Tela de Login</Text>
    </Flex>

    <Box width={'500px'} p={'50px'} pb={'5'} pt={'20px'}>


      <Text size={'3'} >Email:</Text>
      <TextField.Root mb={'4'} color='blue' radius='large' placeholder="Email">
        <TextField.Slot side='left'>
          <EnvelopeClosedIcon width={'20px'} height={'20px'} />
        </TextField.Slot>
      </TextField.Root>


      <Text size={'3'}>Senha:</Text>
      <TextField.Root color='blue' radius='large' placeholder="Senha">
        <TextField.Slot side='right'>
          <IconButton variant='ghost'>
            <EyeClosedIcon />
          </IconButton>
        </TextField.Slot>

        <TextField.Slot side='left'>
          <LockClosedIcon width={'20px'} height={'20px'} />
        </TextField.Slot>
      </TextField.Root>
    </Box>
    
    <Button mx={'8'} mb={'4'}>
      <DoubleArrowLeftIcon />Entrar <DoubleArrowRightIcon />
    </Button>

  </Card>
  </Flex>
  );
}
