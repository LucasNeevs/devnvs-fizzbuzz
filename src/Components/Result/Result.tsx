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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="center">Value</TableCell>
            <TableCell align="center">Answer</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            state.map((s: IResult, index: number): React.ReactElement<HTMLElement> => (
              <TableRow key={index.toString()}>
                <TableCell align="center">
                  {s.val}
                </TableCell>
                <TableCell align="center">
                  {
                    (FizzBuzz(s.val) === 'FizzBuzz') ? (
                      <strong>{`${FizzBuzz(s.val)} 😎`}</strong>
                    ) : (
                      FizzBuzz(s.val)
                    )
                  }
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
};
