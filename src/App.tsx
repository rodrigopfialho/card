import React, { useState } from 'react';
import { GlobalStyles } from './Global';

import { Container, Content, Card, Form, Front, Back, Info, ButtonConfirm, Number, ExpDate, Datas, DatasCard } from './styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import CardLogo from './images/card-logo.svg'
import { useForm } from 'react-hook-form';

interface SchemaForm {
  nome: string,
  numero: number,
  mm: number,
  yy: number,
  cvc: number
}

const schema = yup.object({
  nome: yup.string().required('Inform your name'),
  numero: yup.number().required('Wrong format, number only').transform((value) => (isNaN(value) ? undefined : value)).nullable(),
  mm: yup.number().required('Cant be blank').transform((value) => (isNaN(value) ? undefined : value)).nullable(),
  yy: yup.number().required('Cant be blank').transform((value) => (isNaN(value) ? undefined : value)).nullable(),
  cvc: yup.number().required('Cant be blank').transform((value) => (isNaN(value) ? undefined : value)).nullable(),
})


export default function App() {
  const [nome, setNome] = useState('FELICIA LEIRE')
  const [numero, setNumero] = useState('9591 6489 6383 1010');
  const [mm, setMM] = useState('09');
  const [yy, setYY] = useState('10');
  const [cvc, setCvc] = useState('000');

  const {register, handleSubmit, formState: { errors }} = useForm<SchemaForm>({
    resolver: yupResolver(schema)
  })

  // const onSubmit: SubmitHandler<NewFormInputs> = (data: any) => console.log(data);

  function OnChangeInput(e: any) {
    setNome(e.target.value.toUpperCase().slice(0, 30))
  }

  function OnChangeInputNumber(e: any) {
    setNumero(e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19))
  }

  function onChangeInputMM(e: any) {
    setMM(e.target.value.slice(0, 2))
  }

  function onChangeInputYY(e: any) {
    setYY(e.target.value.slice(0, 2))
  }

  function onChangeInputCvc(e: any) {
    setCvc(e.target.value.slice(0, 3))
  }

  const onSubmit = (data: SchemaForm ) => console.log(data);

  return (
    <Container>
      <Content>
        <Card>
          <Front className='card'>
            <img src={CardLogo} alt="" />
            <Info>
              <Number>
                {numero}
              </Number>
              <Datas>
                <span>{nome}</span>
                <span>{mm}/{yy}</span>
              </Datas>
            </Info>
          </Front >
          <Back>
            <span>{cvc}</span>
          </Back>

        </Card>
        <Form>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>

              <label>CARDHOLDER NAME</label> <br />
              <input
                type="text"
                placeholder='e.g. Jane Appleseed'
                {...register('nome')}
                onChange={OnChangeInput} />
                <p>{errors.nome?.message}</p>
              <br />

              <label>CARD NUMBER</label><br />
              <input
                type="number"
                maxLength={19}
                placeholder='e.g. 1234 5678 9123 0000'
                {...register('numero')}
                onChange={OnChangeInputNumber} />
              <p>{errors.numero?.message}</p>
              <br />
            </div>

            <DatasCard>
              <div>
                <label>EXP. DATE (MM/YY)</label>
                <label>CVC</label>
              </div>
              <ExpDate>
                <div>
                    <input
                      className='mesAno'
                      type="number"
                      placeholder='MM'
                      {...register('mm')}
                      max="12"
                      onChange={onChangeInputMM} 
                    />
                
                    <input
                      className='mesAno'
                      type="number"
                      placeholder='YY'
                      {...register('yy')}
                      onChange={onChangeInputYY}
                    />              
                </div>         
                  <input
                    className='cvc'
                    type="number"
                    placeholder='e.g. 123'
                    {...register('cvc')}
                    onChange={onChangeInputCvc}
                    maxLength={3}
                  />
              </ExpDate>
              
              <div className='erros'>
                <p>{errors.mm?.message}</p>
                <p>{errors.cvc?.message}</p>
              </div>
            </DatasCard>

            <ButtonConfirm type='submit'>
              Confirm
            </ButtonConfirm>
          </form>
        </Form>
      </Content>
      <GlobalStyles />
    </Container>
  );
}

