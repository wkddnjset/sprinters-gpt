import React from 'react';

import { Container, ContainerProps } from '@chakra-ui/react';

import { LAYOUT } from '@/constants/layout';

interface HomeLayoutProps {
  header?: JSX.Element;
  footer?: JSX.Element;
  content?: JSX.Element;
  containerProps?: ContainerProps;
}

const HomeLayout = ({
  //
  containerProps,
  content,
}: HomeLayoutProps) => {
  return (
    <>
      <Container pt="40px" {...containerProps}>
        {content}
      </Container>
    </>
  );
};

export default HomeLayout;
