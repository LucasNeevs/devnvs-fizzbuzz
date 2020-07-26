import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import { withFormik, FormikProps } from 'formik';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import {
  Grid, TextField, Button, FormControl, InputLabel, Select, MenuItem,
} from '@material-ui/core';
import Result from '../Result/Result';
import { resultData } from '../Result/Result.data';
import { IGender, Genders } from '../../Utils/Gender';
import { IForm, formData } from './SuperForm.data';

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
    setFieldValue,
  } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          alignItems="center"
          justify="center"
          spacing={2}
        >
          <Grid item md={6} xs={12}>
            <TextField
              id="name"
              name="name"
              title="Name"
              label="Name"
              variant="outlined"
              margin="dense"
              value={values.name}
              error={touched.name as any && errors.name as any}
              helperText={(touched.name && errors.name) && errors.name}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              id="surrname"
              name="surrname"
              title="Surrname"
              label="Surrname"
              variant="outlined"
              margin="dense"
              value={values.surrname}
              error={touched.surrname as any && errors.surrname as any}
              helperText={(touched.surrname && errors.surrname) && errors.surrname}
              onChange={handleChange}
              onBlur={handleBlur}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <KeyboardDatePicker
              id="birthdate"
              name="birthdate"
              format="MM/dd/yyyy"
              margin="dense"
              variant="dialog"
              value={values.birthdate}
              onChange={(value: any): void => {
                setFieldValue('birthdate', value);
              }}
              disabled={isSubmitting}
              fullWidth
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FormControl
              margin="dense"
              variant="outlined"
              fullWidth
            >
              <InputLabel>Gender</InputLabel>
              <Select
                name="gender"
                id="gender"
                label="Gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              >
                {
                  Genders.map((g: IGender): React.ReactElement<HTMLElement> => (
                    <MenuItem key={g.id} value={g.name}>
                      {g.name}
                    </MenuItem>
                  ))
                }
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="observation"
              name="observation"
              title="Observations"
              label="Observations"
              variant="outlined"
              margin="dense"
              value={values.observation}
              error={(touched.observation as any && errors.observation as any)}
              helperText={(touched.observation && errors.observation) && errors.observation}
              onChange={handleChange}
              onBlur={handleBlur}
              rows={8}
              rowsMax={15}
              multiline
              fullWidth
            />
          </Grid>
          <Grid item md={12} xs={12} style={{ display: 'flex', flexDirection: 'row' }}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              Send
            </Button>
            <Button
              variant="contained"
              color="default"
              onClick={handleReset}
              fullWidth
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </form>
      <Result />
    </MuiPickersUtilsProvider>
  );
};

export default withFormik({
  displayName: 'MyForm',
  enableReinitialize: true,
  mapPropsToValues: (): IForm => ({
    id: 0,
    name: '',
    surrname: '',
    birthdate: new Date().toISOString(),
    gender: '',
    observation: '',
  }),
  handleSubmit: (values: IForm, { resetForm, setSubmitting }): void => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(values));
    formData.push({
      id: formData.length + 1,
      name: values.name,
      surrname: values.surrname,
      birthdate: values.birthdate,
      gender: values.gender,
      observation: values.observation,
    });
    setSubmitting(false);
    resetForm();
  },
})(MyForm);
