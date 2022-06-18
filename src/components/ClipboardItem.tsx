import { useForm } from "react-hook-form";
import { Input, Flex, Button, FormControl } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface ClipboardItemProps {
  storeItem: (itemToStore: string, id: number) => void;
  storeAndCopyItems: (itemToStore: string, id: number) => void;
  storedItem: string;
  id: number;
}

export default function ClipboardItem({
  storeAndCopyItems,
  storedItem,
  storeItem,
  id,
}: ClipboardItemProps) {
  const { handleSubmit, register, reset } = useForm();
  const [buttonText, setButtonText] = useState("Copy");

  const onSubmit = (values: any) => {
    // Update button text to 'copied' for 1.2 secs only
    setButtonText("Copied");
    setTimeout(() => {
      setButtonText("Copy");
    }, 1200);
    storeAndCopyItems(values.copyText, id);
  };

  const saveInput = (e: React.FormEvent<HTMLInputElement>) => {
    storeItem(e.currentTarget.value, id);
  };

  useEffect(() => {
    reset({ copyText: storedItem });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storedItem]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Flex mb="3">
            <Input
              color="gray.600"
              id="copyText"
              fontWeight="bold"
              fontSize="lg"
              {...register("copyText", { onChange: (e) => saveInput(e) })}
              placeholder="Enter text"
              _placeholder={{ fontWeight: "normal" }}
            />
            <Button
              type="submit"
              fontSize="sm"
              ml="3"
              aria-label="Copy text"
              colorScheme="blue"
            >
              {buttonText}
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
}
