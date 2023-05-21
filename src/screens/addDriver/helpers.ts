import * as Yup from 'yup';

export const ADD_DRIVER_SCHEMA = Yup.object().shape({
    name: Yup.string()
    .required('Name is required'),
    email: Yup.string()
        .email('Email entered is not valid')
        .required('Email is required'),
});
