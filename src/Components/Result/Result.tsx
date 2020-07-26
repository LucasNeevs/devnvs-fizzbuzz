import React, { useState } from 'react';
import {
  Table, TableCell, TableHead, TableRow, TableBody,
} from '@material-ui/core';
import FizzBuzz from '../../Helpers/FizzBuzz';
import { resultData, IResult } from '../Result/Result.data';

export default (): React.ReactElement<HTMLElement> => {
  const [state] = useState(resultData);

  return (
    <>
      <Table>
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
    </>
  );
};
