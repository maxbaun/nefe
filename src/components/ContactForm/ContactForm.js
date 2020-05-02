import React from 'react';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

import {ButtonPrimary} from '../shared/Button';
import TextInput from '../shared/TextInput';

const ContactFormWrap = styled.div``;

const ContactForm = ({...props}) => {
  const {register, handleSubmit, watch, errors} = useForm();
  const onSubmit = data => console.log(data);

  return (
    <ContactFormWrap {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextInput id="name" name="name" placeholder="Full Name*" ref={register({required: true})} />
        <TextInput id="email" email="email" placeholder="Email*" ref={register({required: true})} type="email" />
        <TextInput
          as="textarea"
          cols="40"
          id="message"
          name="message"
          placeholder="Message*"
          ref={register({required: true})}
          rows="10"
          style={{height: 155}}
          type={null}
        />
        <ButtonPrimary as="button" role="submit" style={{display: 'block', width: '100%'}} type="submit">
          Submit Now
        </ButtonPrimary>
      </form>
    </ContactFormWrap>
  );
};

export default ContactForm;
