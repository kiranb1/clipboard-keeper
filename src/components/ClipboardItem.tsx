import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { Input, Flex, IconButton } from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";

export default function ClipboardItem(
  uploadItem: (itemToStore: string) => void
) {
  const [items, setItems] = useState<string[]>([]);

  const formik = useFormik({
    initialValues: {
      copyText: "",
    },
    onSubmit: (values) => {
      uploadItem(values.copyText);
    },

    // TODO load local storage on page reload
    // TODO change input text weight/size
    // TODO change button to text button that changes from copy to copied. Add Timeout to return to copy text after 10 seconds
    // TODO add description field
    // TODO deploy to git pages
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
