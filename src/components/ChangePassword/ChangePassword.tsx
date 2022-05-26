import React from 'react';
import PasswordField from '../PasswordField';
import FormWrapper from '../FormWrapper/FormWrapper';

export interface ChangePasswordProps {
  handleSubmit: () => void;
  loading: boolean;
  message?: string;
}

const ChangePassword = (props: ChangePasswordProps) => {
  const { handleSubmit, message, loading } = props;

  const passwordFieldActions = {
    values: { password: 'dsnkjn' },
    handleChange: () => console.log('handleChange'),
    touched: { password: '' },
    errors: { password: '' },
  };

  return (
    <FormWrapper
      handleSubmit={handleSubmit}
      loading={loading}
      message={message}
      formName="Change Password"
    >
      <>
        <PasswordField label="New password" actions={passwordFieldActions} />
        <PasswordField
          label="Confirm new password"
          actions={passwordFieldActions}
        />
      </>
    </FormWrapper>
  );
};

export default ChangePassword;
