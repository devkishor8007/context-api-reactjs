import React, { useContext } from 'react';
import { ColorContext } from '../context/color.context';
import { Box, Text, Heading, VStack } from '@chakra-ui/react';

export default function About() {
  const colorCtx = useContext(ColorContext);
  const { selectColor } = colorCtx;
  return (
    <VStack>
      <Box m="2px">
        <Text style={{ color: selectColor }}>
          React makes it painless to create interactive UIs. Design simple views
          for each state in your application, and React will efficiently update
          and render just the right components when your data changes.
        </Text>
        <Text mb="3px">
          We don’t make assumptions about the rest of your technology stack, so
          you can develop new features in React without rewriting existing
          code.We don’t make assumptions about the rest of your technology
          stack, so you can develop new features in React without rewriting
          existing code.
        </Text>
        <Heading> Why Accessibility?</Heading>
        <Text>
          Web accessibility (also referred to as a11y) is the design and
          creation of websites that can be used by everyone. Accessibility
          support is necessary to allow assistive technology to interpret web
          pages. React fully supports building accessible websites, often by
          using standard HTML techniques.
        </Text>
      </Box>
    </VStack>
  );
}
