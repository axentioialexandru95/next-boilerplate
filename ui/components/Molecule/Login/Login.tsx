import { PropsWithClassName } from '@Framework/ui';
import { Card, CardContent, CardHeader } from '@mui/material';
import React, { PropsWithChildren } from 'react';

import { Root } from './Login.styles';

interface Props extends PropsWithClassName { }

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
