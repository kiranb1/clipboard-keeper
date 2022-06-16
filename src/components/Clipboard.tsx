import ClipboardItem from "./ClipboardItem";
import React, { useState, useEffect } from "react";
import { Heading, Center, Container } from "@chakra-ui/react";

export default function Clipboard() {
  const [items, setItems] = useState<string[]>(
    JSON.parse(localStorage.getItem("items") || "[]")
  );

  useEffect(() => {
    const itemsStoredLocally = JSON.parse(
      localStorage.getItem("items") || "{}"
    );

    setItems(itemsStoredLocally);

    if (items) {
      // items is empty to begin with
      console.log("items are ", items);
      setItems(items);
      console.log("hello ", JSON.parse(localStorage.getItem("items") || "{}"));
    }
    // Save to local storage
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const storeItems = (item: string) => {
    if (!items.includes(item)) {
      setItems((items) => [...items, item]);
    }
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
