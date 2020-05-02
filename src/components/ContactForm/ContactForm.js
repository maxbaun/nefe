import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

import {ButtonPrimary} from '../shared/Button';
import TextInput from '../shared/TextInput';
import _submitForm from './_submitForm';

const ContactFormError = styled.small.attrs({
  className: 'text-danger form-text'
})``;

const ContactFormCompleteMessage = styled.p``;

const ContactFormWrap = styled.div``;

const ContactForm = ({...props}) => {
  const {
    formState: {isSubmitting},
    register,
    reset,
    handleSubmit,
    errors
  } = useForm();
  const [complete, setComplete] = useState(false);
  const onSubmit = async data => {
    await _submitForm(data);
    setComplete(true);
    reset();
  };

  return (
    <ContactFormWrap {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput id="name" name="name" placeholder="Full Name*" ref={register({required: 'Please enter your name'})}>
          {errors.name ? <ContactFormError>{errors.name.message}</ContactFormError> : null}
        </TextInput>
        <TextInput
          id="email"
          name="email"
          placeholder="Email*"
          ref={register({required: 'Please enter your email address'})}
          type="email"
        >
          {errors.email ? <ContactFormError>{errors.email.message}</ContactFormError> : null}
        </TextInput>
        <TextInput
          as="textarea"
          cols="40"
          id="message"
          name="message"
          placeholder="Message*"
          ref={register({required: 'Please enter your message'})}
          rows="10"
          style={{height: 155}}
          type={null}
        >
          {errors.message ? <ContactFormError>{errors.message.message}</ContactFormError> : null}
        </TextInput>
        {complete ? (
          <ContactFormCompleteMessage>
            Your message has been sent! We will be in touch shortly.
          </ContactFormCompleteMessage>
        ) : null}
        <ButtonPrimary
          as="button"
          disabled={isSubmitting}
          role="submit"
          style={{display: 'block', width: '100%'}}
          type="submit"
        >
          Submit Now
        </ButtonPrimary>
      </form>
    </ContactFormWrap>
  );
};

export default ContactForm;
