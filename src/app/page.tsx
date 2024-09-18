"use client"

import {  ArrowRightIcon, EnvelopeClosedIcon, EyeClosedIcon, EyeOpenIcon, LockClosedIcon, ThickArrowRightIcon } from '@radix-ui/react-icons';
import { Flex, Text, Button, Card, Box, TextField, IconButton, Link} from '@radix-ui/themes';
import React from 'react';
import { useState } from 'react';


export default function MyApp() {

  //Logica para mudar o texto e o icone
  const [opened, setOpened] = useState(false);

  function anyClick() {
    setOpened(!opened);
  }


  return (
  //Elemento pai
  <Flex direction="column" justify={'center'} align={'center'} height={'100vh'} gap="2">

  {/*Tela de login*/}
  <Card>

    {/*Definição de tamanho*/}
    <Flex justify={'center'} pt={'10px'}>
      <Text size={'5'} >Tela de Login</Text>
    </Flex>

    <Box width={'500px'} p={'50px'} pb={'5'} pt={'20px'}>

      {/*Parte do Email*/}
      <Text size={'3'} >Email:</Text>
      <TextField.Root mb={'4'} color='blue' radius='large' placeholder="Email"> {/*Area de escrita*/}
        <TextField.Slot side='left'>
          <EnvelopeClosedIcon width={'20px'} height={'20px'} /> {/*Icone de envelope*/}
        </TextField.Slot>
      </TextField.Root>

      {/*Parte da senha*/}
      <Text size={'3'}>Senha:</Text>
      <TextField.Root
        color='blue'
        radius='large'
        placeholder="Senha"
        type={ opened ? 'text' : 'password' /*Logica de alternancia do texto*/}
      > {/*Area para escrita*/}

        <TextField.Slot side='right'>
          <IconButton variant='ghost' onClick={anyClick}>
            { opened ? < EyeOpenIcon /> : <EyeClosedIcon /> /*Logica de alternancia do icone*/}
          </IconButton>
        </TextField.Slot>

        <TextField.Slot side='left'>
          <LockClosedIcon width={'20px'} height={'20px'} /> {/*Icone de cadeado*/}
        </TextField.Slot>
      </TextField.Root>
    </Box>
    
    <Button mx={'8'} mb={'4'}>
      <Link href="/dashboard">
        Entrar
      </Link>
    </Button>

  </Card>
  </Flex>
  );
}
