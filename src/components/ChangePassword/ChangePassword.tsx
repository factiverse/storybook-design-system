import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import PasswordField from '../PasswordField';
import FormWrapper from '../FormWrapper/FormWrapper';
import ConfirmPassField from '../ConfirmPassField';

export interface ChangePasswordProps {
  initialValues: { password: string; passwordConfirmation: string };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  schemaChangePass: Yup.ObjectSchema<any>;
  handleChangePass: (formValue: {
    password: string;
    passwordConfirmation: string;
  }) => void;
  loading: boolean;
  message?: string;
}

const ChangePassword = (props: ChangePasswordProps) => {
  const {
    initialValues,
    schemaChangePass,
    handleChangePass,
    message,
    loading,
  } = props;

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: schemaChangePass,
    onSubmit: handleChangePass,
  });

  return (
    <FormWrapper
      handleSubmit={formik.handleSubmit}
      loading={loading}
      message={message}
      formName="Change Password"
      formSubtitle="Your new password must be different from previously used password"
    >
      <>
        <PasswordField actions={formik} />
        <ConfirmPassField actions={formik} />
      </>
    </FormWrapper>
  );
};

export default ChangePassword;
