import ClipboardItem from "./ClipboardItem";
import { Heading, Center, Container } from "@chakra-ui/react";

export default function Clipboard() {
  const clipboardItems = [...Array(10)].map((e, i: number) => (
    <ClipboardItem />
  ));

  return (
    <Container p={8} maxW="960px">
      <>
        <Center my="8">
          <Heading>Clipboard keeper</Heading>
        </Center>
        {clipboardItems}
      </>
    </Container>
  );
}

type ClipboardProps = {
  ClipboardItem: React.ReactNode;
};
