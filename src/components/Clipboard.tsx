import ClipboardItem from "./ClipboardItem";
import React, { useState, useEffect } from "react";
import { Heading, Center, Container, Button } from "@chakra-ui/react";

export default function Clipboard() {
  const [items, setItems] = useState<string[]>(
    JSON.parse(localStorage.getItem("items") || "[]")
  );

  useEffect(() => {
    if (items) {
      setItems(items);
    }
    // Save to local storage
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const storeItems = (item: string, id: number) => {
    // Store item if it doesn't exist already in items
    if (!items.includes(item)) {
      setItems((items) => [...items, item]);
    }

    if (items[id] !== undefined) {
      // The item with passed id already has a saved value
      // Replace this value with the new one
      const updatedItems = items.map((listItem, index) => {
        return index === id ? item : listItem;
      });

      setItems(updatedItems);
    }

    // Copy to clipboard
    navigator.clipboard.writeText(item);
  };

  const deleteAllText = () => {
    setItems([]);
  };

  const clipboardItems = [...Array(10)].map((e, i: number) => (
    <ClipboardItem
      key={i}
      uploadItem={storeItems}
      storedItem={items[i] || ""}
      id={i}
    />
  ));

  return (
    <Container p={8} maxW="760px">
      <>
        <Center my="8">
          <Heading>Clipboard keeper</Heading>
        </Center>
        {clipboardItems}
        {/* //TODO */}
        {/* <Button colorScheme="green" mr="3">
          Save all
        </Button> */}
        <Button onClick={deleteAllText} colorScheme="red">
          Delete all
        </Button>
      </>
    </Container>
  );
}
