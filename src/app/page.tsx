import { Flex, Text, Button, Card, Box, Grid, Container } from '@radix-ui/themes';

export default function MyApp() {
  return (
    <Flex direction="row" justify={'center'} align={'center'} height={'100vh'} gap="2">
      <Text>Hello from Radix Themes :)</Text>
      <Button>Let's go</Button>
    </Flex>
  );
}
