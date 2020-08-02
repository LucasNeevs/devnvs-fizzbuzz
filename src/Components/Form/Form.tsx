import React from 'react';
import { withFormik, FormikProps } from 'formik';
import { Grid, TextField, Button } from '@material-ui/core';
import Result from '../Result/Result';
import { resultData } from '../Result/Result.data';
import useStyles from './Styles';
import Title from './Title/Title';

interface IForm {
  val: number,
}

const MyForm = (props: FormikProps<IForm>): React.ReactElement<HTMLElement> => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
    handleReset,
    isSubmitting,
  } = props;
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Title title="Enjoy it!" />
      <form onSubmit={handleSubmit} className={classes.form}>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item md={2} xs={12}>
            <TextField
              id="val"
              name="val"
              title="Value to fizz"
              label="Value"
              variant="outlined"
              margin="dense"
              type="number"
              value={values.val}
              error={touched.val as any && errors.val as any}
              helperText={(touched.val && errors.val) && errors.val}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid item md={2} xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              FizzBuzz
            </Button>
          </Grid>
        </Grid>
      </form>
      <Result />
    </div>
  );
};

export default withFormik({
  displayName: 'MyForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => ({ val: 0 }),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    resultData.push({
      val: values.val,
    });
    setSubmitting(false);
    resetForm();
  },
})(MyForm);
