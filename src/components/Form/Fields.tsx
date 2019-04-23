import * as React from 'react'
import { LabelStyled, TextAreaStyled, Input, SelectStyled } from './elements'

export const InputField = ({ input, meta, label, ...rest }: any) => (
  <>
    {label && <LabelStyled>{label}</LabelStyled>}
    <Input {...input} {...rest} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </>
)

export const TextArea = ({ input, meta, label, ...rest }: any) => (
  <>
    {label && <LabelStyled>{label}</LabelStyled>}
    <TextAreaStyled {...input} {...rest} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </>
)

export const Label = ({ text }: any) => (
  <>
    <LabelStyled>{text}</LabelStyled>
  </>
)

export const SelectField = ({ input, meta, label, ...rest }: any) => (
  <>
    {label && <LabelStyled>{label}</LabelStyled>}
    <SelectStyled {...input} {...rest} />
    {meta.error && meta.touched && <span>{meta.error}</span>}
  </>
)
