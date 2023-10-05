import { useContext } from "react";
import Image from "next/dist/client/image";
import { Box, Icon, Flex } from "@chakra-ui/react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const ImageScrollBar = ({ data }) => (
  <ScrollMenu style={{ overflow: "hidden" }}>
    {data.map((item) => (
      <Box key={item.id} width="910px" itemID={item.id} overflow="hidden" p="1">
        <Image
          alt="property"
          placeholder="blur"
          blurDataURL={item.url}
          src={item.url}
          width="1000px"
          height="500px"
          sizes="(max-width:500px) 100px, (max-width:1024px) 400px, 1000px"
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
