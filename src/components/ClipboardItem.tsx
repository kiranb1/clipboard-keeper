import { Input, Flex, IconButton } from "@chakra-ui/react";
import { FaClipboardCheck } from "react-icons/fa";

export default function ClipboardItem() {
  return (
    <>
      <Flex mb="3">
        <Input placeholder="Enter text" />
        <IconButton aria-label="Copy text" icon={<FaClipboardCheck />} ml="3" />
      </Flex>
    </>
  );
}
