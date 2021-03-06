import React from 'react';
import { Helmet } from 'react-helmet';

import SignInContainer from '~/containers/SignIn';

import { SignWrap } from '../styled';

interface Props {}

const Sign: React.FC<Props> = () => {
  return (
    <SignWrap>
      <Helmet>
        <title>로그인 - Crawling-ui</title>
      </Helmet>

      <SignInContainer />
    </SignWrap>
  );
};

export default Sign;
