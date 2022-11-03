import { PropsWithClassName } from '@Framework/ui';
import { DataGrid } from '@mui/x-data-grid';
import React, {
  PropsWithChildren, useEffect, useState,
} from 'react';
import { Box, TextField } from '@mui/material';
import { Root } from './Table.styles';

type Props = PropsWithClassName;

const Table: React.FC<Props> = (props: PropsWithChildren<Props>): React.ReactElement => {
  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  const [search, setSearch] = useState('');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  function filterData(evt: any) {
    console.log(evt);
    console.log('filterData');
  }

  return (
    <Root className={props.className} data-testid={'table-root'}>
      <div style={{ display: 'flex', height: '500px' }}>
        <div style={{ flexGrow: 1 }}>
          <Box my={4}>
            <TextField onChange={() => setSearch} value={search}></TextField>
          </Box>
          {tableData
            && <DataGrid rows={tableData}
              columns={columns}
              pageSize={12}
              onFilterModelChange={(evt) => filterData(evt)}
            />
          }
        </div>
      </div>
    </Root>
  );
};

export { Table };
