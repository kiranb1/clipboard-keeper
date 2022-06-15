import ClipboardItem from "./ClipboardItem";
import React, { useState, useEffect } from "react";
import { Heading, Center, Container } from "@chakra-ui/react";

export default function Clipboard() {
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem("items") || "{}"));
    if (items) {
      setItems(items);
    }
    console.log("items are", items);
  }, []);

  const storeItems = (item: string) => {
    setItems((items) => [...items, item]);
    console.log("new items ", items);
    // Save to local storage
    localStorage.setItem("items", JSON.stringify(items));
    // Copy to clipboard
    navigator.clipboard.writeText(item);
  };

  const clipboardItems = [...Array(10)].map((e, i: number) => (
    <ClipboardItem uploadItem={storeItems} />
  ));

  return (
    <Container p={8} maxW="760px">
      <>
        <Center my="8">
          <Heading>Clipboard keeper</Heading>
        </Center>
        {clipboardItems}
      </>
    </Container>
  );
}
