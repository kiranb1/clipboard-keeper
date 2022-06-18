import { useForm } from "react-hook-form";
import { Input, Flex, IconButton, FormControl } from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";
import { useEffect } from "react";

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

  const onSubmit = (values: any) => {
    storeAndCopyItems(values.copyText, id);
  };

  const saveInput = (e: React.FormEvent<HTMLInputElement>) => {
    storeItem(e.currentTarget.value, id);
  };

  useEffect(() => {
    reset({ copyText: storedItem });
  }, [storedItem]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Flex mb="3">
            <Input
              id="copyText"
              fontWeight="bold"
              fontSize="lg"
              {...register("copyText", { onChange: (e) => saveInput(e) })}
              placeholder="Enter text"
              _placeholder={{ fontWeight: "normal" }}
            />
            <IconButton
              type="submit"
              aria-label="Copy text"
              icon={<FaClipboardCheck />}
              ml="3"
            />
          </Flex>
        </FormControl>
      </form>
    </>
  );
}
