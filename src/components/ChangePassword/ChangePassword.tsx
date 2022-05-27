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
    touched: { password: 'I am here' },
    errors: { password: 'I am here' },
  };

  return (
    <FormWrapper
      handleSubmit={handleSubmit}
      loading={loading}
      message={message}
      formName="Change Password"
      formSubtitle="Your new password must be different from previously used password"
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
