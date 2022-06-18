import { useForm } from "react-hook-form";
import { Input, Flex, IconButton, FormControl } from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";
import { useEffect } from "react";

interface ClipboardItemProps {
  uploadItem: (itemToStore: string, id: number) => void;
  storedItem: string;
  id: number;
}

export default function ClipboardItem({
  uploadItem,
  storedItem,
  id,
}: ClipboardItemProps) {
  const { handleSubmit, register, reset } = useForm();

  function onSubmit(values: any) {
    uploadItem(values.copyText, id);
  }

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
              {...register("copyText")}
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
