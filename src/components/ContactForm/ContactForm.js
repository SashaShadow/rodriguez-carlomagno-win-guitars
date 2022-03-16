import { Formik, Form, Field } from 'formik'
import './ContactForm.css'

  const validateName = value => {
    let error;
    if (!value) {
      error = 'Se requiere que escribas tu nombre';
    } else if (value.length <= 1) {
      error = 'El nombre tiene que tener mas de un caracter';
    }
    return error;
  }

  const validateEmail = value => {
    let error;
    if (!value) {
      error = 'Se requiere que escribas tu correo electrónico';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Direccion de correo electrónico inválida';
    }
    return error;
  }

  const validatePhone = value => {
    let error;
    if (!value) {
      error = 'Se requiere que escribas tu número de teléfono';
    } else if (!/^\d+$/.test(value)) {
      error = "Teléfono inválido: solo se permiten números."
    }
    return error;
  }

  const validateAddress = value => {
    let error;
    if (!value) {
      error = 'Se requiere que escribas tu dirección';
    } else if (value.length <= 5 || value.length > 40) {
      error = "No se permite una dirección con menos de 5 caracteres o mas de 40"
    }
    return error;
  }
  
const ContactForm = ({ contactFormRef, setContact }) => {
    
    return (     
      <div className='ContactContainer'>
          <h3>Datos del comprador</h3>
      <Formik initialValues={{
        name: '',
        email: '',
        phone: '',
        address: '',
        comment: '',
      }} 
      onSubmit={values => {
        setContact(values);
        contactFormRef.current.toggleVisibility()
      }}
      >
      {({ errors, touched, }) => (
      <Form className='ContactForm'>
        <label className='LabelContact'>Nombre:
        <Field name="name" validate={validateName} className="InputContact"/>
        {errors.name && touched.name && <div>{errors.name}</div>}</label>
        <label className='LabelContact'>Email:
        <Field name="email" validate={validateEmail} className="InputContact"/>
        {errors.email && touched.email && <div>{errors.email}</div>}</label>
        <label className='LabelContact'>Teléfono:
        <Field name="phone" validate={validatePhone} className="InputContact"/>
        {errors.phone && touched.phone && <div>{errors.phone}</div>}</label>
        <label className='LabelContact'>Dirección:
        <Field name="address" validate={validateAddress} className="InputContact"/>
        {errors.address && touched.address && <div>{errors.address}</div>}</label>
        <label className='LabelContact'>Comentario (opcional):
        <Field name="comment" className="InputContact"/>
        </label>
        <button type="submit" className='Submit'>Confirmar</button>
      </Form>)}
      </Formik>
      </div> )
}

export default ContactForm