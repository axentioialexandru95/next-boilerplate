import { PropsWithClassName } from '@Framework/ui';
import React, { ChangeEvent, PropsWithChildren, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import {
  Box,
  IconButton, TextField, Toolbar, Typography,
} from '@mui/material';
import { Menu } from 'react-feather';
import { Root } from './Navbar.styles';

type Props = PropsWithClassName;

const Navbar: React.FC<Props> = (props: PropsWithChildren<Props>): React.ReactElement => {
  const [search, setSearch] = useState('');

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setSearch(evt.target.value);
  };
  return (
    <Root className={props.className} data-testid={'navbar-root'}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <Menu />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              MUI
            </Typography>
            <TextField value={search} onChange={handleChange} />
          </Toolbar>
        </AppBar>
      </Box>
    </Root>
  );
};

export { Navbar };
