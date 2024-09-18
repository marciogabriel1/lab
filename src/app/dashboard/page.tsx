import { MagnifyingGlassIcon } from "@radix-ui/react-icons"
import { Avatar, Card, Flex, Grid, Section, Box , Text, TextField, Select, Button, Separator } from "@radix-ui/themes"

export default function Test() {

  

  return(
    //Elemento pai
    <Flex position={'absolute'} justify={'start'} direction={'column'} align={'start'} height={'100vh'}>

      {/*Barra Menu*/}
      <Card>
        <Grid position={'absolute'}>

          <Flex height={'25px'} width={'1575px'} justify={'center'} align={'center'}>
            <Box width={'600px'}>
              <TextField.Root radius="full" color="blue"> {/*Area de pesquisa*/}
                <TextField.Slot side="left">
                  <MagnifyingGlassIcon width={'20px'} height={'20px'} /> {/*Icone de lupa*/}
                </TextField.Slot>
              </TextField.Root>
            </Box>
          </Flex>

          <Flex direction={'column-reverse'} align={'start'} justify={'start'} height={'20px'} pl={'25px'} pb={'17px'}>
            <Text size={'4'}>Dashboard</Text>
          </Flex>

        </Grid>

        <Flex width={'1575px'} height={'30px'} justify={'end'} align={'center'} px={'25px'}>
          <Avatar fallback="M" />
        </Flex>

      </Card>

      {/*Coluna de Opições*/}
      <Box style={{background: 'var(--blue-9)' }} height={'100vh'} width={'350px'}>

        <Separator orientation="horizontal" size="3" />

        <Button style={{width: '350px', height: '50px', background: 'var(--gray-7)'}}>
          <Text>bla bla bla bla</Text>
        </Button>

        <Separator orientation="horizontal" size="3" />

        <Button style={{width: '350px', height: '50px', background: 'var(--gray-7)'}}>
          <Text>bla bla bla bla</Text>
        </Button>

        <Separator orientation="horizontal" size="3" />

        <Button style={{width: '350px', height: '50px', background: 'var(--gray-7)'}}>
          <Text>bla bla bla bla</Text>
        </Button>

      </Box>

    </Flex>
  )
}