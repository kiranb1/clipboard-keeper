import { useFormik } from "formik";
import React, { useState } from "react";
import { Input, Flex, IconButton } from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";

export default function ClipboardItem() {
  const [text, setText] = useState("");

  const formik = useFormik({
    initialValues: {
      copyText: "",
    },
    onSubmit: (values) => {
      setText(values.copyText);
      // TODO copy to clipboard
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
