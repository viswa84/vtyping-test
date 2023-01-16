import { Alert, AlertIcon, Box, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

const Tytst = () => {
  const [text, setText] = useState(
    "once you have finished typing this lesson , look away from the computer for a few short"
  );
  const [input, setInput] = useState("");
  const [speed, setSpeed] = useState(0);
  const [accuracy, setAccuracy] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const handleChange = (e) => {
    setInput(e.target.value);
    if (e.target.value === text) {
      setIsFinished(true);
      const endTime = new Date();
      const startTime = new Date(endTime - input.length * 50);
      setSpeed(Math.round((text.length / (endTime - startTime)) * 60));
      setAccuracy(
        Math.floor(
          ((input.length - (text.length - input.length)) / text.length) * 100
        )
      );

      alert(`Typing speed is: ${speed} WPM
 Typing accuracy is: ${accuracy}%`);
      <Alert status="success">Data uploaded to the server. Fire on!</Alert>;
    }
  };
  return (
    <Flex justifyContent={"center"} alignItems="center" h="100vh">
      <Box>
        <Box>
          <Box id="viswa">
            {text.split("").map((el, i) => {
              return input[i] === el ? (
                <span key={i} style={{ color: "#757575" }}>
                  {el}
                </span>
              ) : (
                <span key={i} style={{ color: "red" }}>
                  {el}
                </span>
              );
            })}
          </Box>
          <Box>
            <Input
              id="inp-typing"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default Tytst;
