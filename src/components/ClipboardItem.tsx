import { useFormik } from "formik";
import React from "react";
import { Input, Flex, IconButton } from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";

interface ClipboardItemProps {
  uploadItem: (itemToStore: string) => void;
}

export default function ClipboardItem({ uploadItem }: ClipboardItemProps) {
  const formik = useFormik({
    initialValues: {
      copyText: "",
    },
    onSubmit: (values) => {
      uploadItem(values.copyText);
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <Flex mb="3">
          <Input
            name="copyText"
            onChange={formik.handleChange}
            value={formik.values.copyText}
            placeholder="Enter text"
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
