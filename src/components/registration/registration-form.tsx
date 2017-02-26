import * as React from 'react';
const ReduxForm = require('redux-form');
/*let Recaptcha  = require('react-recaptcha');*/

import Form from '../form/';
import FormGroup from '../form/form-group';
import FormLabel from '../form/form-label';
import FormError from '../form/form-error';
import Input from '../form/form-input';
import Button from '../button';
import Alert from '../alert';

let recaptchaInstance;

// create a reset function
const resetRecaptcha = () => {
  recaptchaInstance.reset();  
};

interface IRegistrationProps {
    onsubmit: () => void;
    handleSubmit?: () => void;
    resetForm?: () => void;
    isPending: boolean;
    hasError: boolean;
    fields?: {
        firstname: any;
        lastname: any;
        email: any;
        mobile: any;
        recaptcha: any;
    };
};

class RegistrationForm extends React.Component<IRegistrationProps, void> {
    render() {
        const {
            handleSubmit,
            resetForm,
            isPending,
            hasError,
            fields : {
                firstname,
                lastname,
                email,
                mobile,
                recaptcha
            }
        } = this.props;

        return(
            <Form handleSubmit={ handleSubmit }>
                <Alert
                    testid ="alert-loading"
                    isVisible={ isPending}>
                    Loading...
                 </Alert>
                 <Alert
                    testid="alert-error"
                    id="qa-alert"
                    isVisible={ hasError }
                    status="error">
                    Invalid form data
                </Alert>
                <FormGroup testid="registration-firstname">
                    <FormLabel id="qa-firstname-label">First Name</FormLabel>
                    <Input
                        type="text" fieldDefinition={ firstname }
                        id="qa-firstname-input"
                        placeholder="FirstName"/>
                    <FormError id="qa-firstname-validation"
                        isVisible={ !!(firstname.touched && firstname.error) }>
                    { firstname.error }
                    </FormError>
                </FormGroup>
                <FormGroup testid="registration-lastname">
                    <FormLabel id="qa-lastname-label">Last Name</FormLabel>
                    <Input
                        type="text" fieldDefinition={ lastname }
                        id="qa-lastname-input"
                        placeholder="LastName"/>
                    <FormError id="qa-lastname-validation"
                        isVisible={ !!(lastname.touched && lastname.error) }>
                    { lastname.error }
                    </FormError>
                </FormGroup>                    
                <FormGroup testid="registration-email">
                    <FormLabel id="qa-email-label">Email</FormLabel>
                    <Input
                        type="text" fieldDefinition={ email }
                        id="qa-email-input"
                        placeholder="Email"/>
                    <FormError id="qa-email-validation"
                        isVisible={ !!(email.touched && email.error) }>
                    { email.error }
                    </FormError>
                </FormGroup>                    
                <FormGroup testid="registration-mobile">
                    <FormLabel id="qa-mobile-label">Mobile Number</FormLabel>
                    <Input
                        type="text" fieldDefinition={ mobile }
                        id="qa-mobile-input"
                        placeholder="mobile"/>
                    <FormError id="qa-mobile-validation"
                        isVisible={ !!(mobile.touched && mobile.error) }>
                    { mobile.error }
                    </FormError>
                </FormGroup>
                {/*<FormGroup testid="registration-recaptcha">
                    <FormLabel id="qa-recaptcha-label">Re-Captcha</FormLabel>
                    <Recaptcha
                        ref={e => recaptchaInstance = e} 
                        sitekey="xxxxxxxxxxxxxxxxxxxx"
                    />
                    <FormError id="qa-mobile-validation"
                        isVisible={ !!(mobile.touched && mobile.error) }>
                    { mobile.error }
                    </FormError>
                </FormGroup>                                    */}

            </Form>
        );
    }

  static validate(values) {
  const errors = { 
        firstname: '', 
        lastname: '',
        email: '', 
        mobile: '', 
        recaptcha: '' 
    };

    if (!values.firstname) {
      errors.firstname = 'First Name is required.';
    }

    if (!values.lastName) {
      errors.lastname = 'Last Name is required.';
    }

    if (!values.email) {
      errors.email = 'E-Mail is required.';
    }

    if (!values.mobile) {
      errors.mobile = 'Cell Phone  is required.';
    }

    if (!values.recaptcha) {
      errors.recaptcha = 'Re-Captcha is required.';
    }

    return errors;
  }
}

export default ReduxForm.reduxForm({
  form: 'registration',
  fields: [
      'firstname',
      'lastname',
      'email',
      'mobile', 
      'recaptcha',
  ],
  validate: RegistrationForm.validate,
})(RegistrationForm);
