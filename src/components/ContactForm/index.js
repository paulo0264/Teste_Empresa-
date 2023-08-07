import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import {
  FormContainer,
  FormGroup,
  Input,
  ErrorMessage,
  SubmitButton,
} from './styles'

const schema = yup.object().shape({
  firstName: yup.string().required('Nome é obrigatório'),
  lastName: yup.string().required('Sobrenome é obrigatório'),
  email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
  message: yup.string().required('Mensagem é obrigatória'),
});


const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Aqui você pode fazer o envio dos dados para o servidor ou realizar outras ações necessárias
  };

  return (

    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h2>Entre em Contato</h2>
      <FormGroup>
        <Controller
          name="firstName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Nome" />}
        />
        <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <Controller
          name="lastName"
          control={control}
          render={({ field }) => <Input {...field} placeholder="Sobrenome" />}
        />
        <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <Controller
          name="email"
          control={control}
          render={({ field }) => <Input {...field} placeholder="email@exemplo.com" />}
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
      </FormGroup>

      <FormGroup>
        <Controller
          name="message"
          control={control}
          render={({ field }) => <textarea {...field} placeholder="Digite sua mensagem" />}
        />
        <ErrorMessage>{errors.message?.message}</ErrorMessage>
      </FormGroup>

      <SubmitButton type="submit">Enviar</SubmitButton>
      
    </FormContainer>
  );
};

export default ContactForm;
