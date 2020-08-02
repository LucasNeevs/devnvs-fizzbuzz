import React, { useState } from 'react';
import {
  Table, TableCell, TableHead, TableRow, TableBody,
} from '@material-ui/core';
import FizzBuzz from '../../Helpers/FizzBuzz';
import { resultData, IResult } from '../Result/Result.data';
import useStyles from './Styles';

export default (): React.ReactElement<HTMLElement> => {
  const [state] = useState(resultData);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Table style={{ width: '500px', border: '2px solid #d4d4d4', marginBottom: '40px', textAlign: 'center' }}>
        <TableHead>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.map((s: IResult, index: number): React.ReactElement<HTMLElement> => (
              <TableRow key={index.toString()}>
                <TableCell>{s.val}</TableCell>
                <TableCell>{FizzBuzz(s.val)}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};
