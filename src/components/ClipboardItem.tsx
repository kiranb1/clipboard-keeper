import { useFormik } from "formik";
import { Input, Flex, IconButton } from "@chakra-ui/react";
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
  useEffect(() => {
    // Your Code
    console.log("hello ", storedItem);
  }, [storedItem]);

  const formik = useFormik({
    initialValues: {
      copyText: storedItem || "",
    },
    onSubmit: (values) => {
      uploadItem(values.copyText, id);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex mb="3">
          <Input
            name="copyText"
            fontWeight="bold"
            fontSize="lg"
            onChange={formik.handleChange}
            value={formik.values.copyText}
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
      </form>
    </>
  );
}
