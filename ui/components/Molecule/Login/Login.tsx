import { PropsWithClassName } from '@Framework/ui';
import { Card, CardContent } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { Root } from './Login.styles';

type Props = PropsWithClassName;

const Login: React.FC<Props> = (props: PropsWithChildren<Props>): React.ReactElement => (
  <Root className={props.className} data-testid={'login-root'}>
    <Card>
      <CardContent>
        Login
      </CardContent>
    </Card>
  </Root>
);

export { Login };
