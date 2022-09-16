import * as Yup from "yup";

const phoneRegExp = /^\+?(?:977)?[ -]?(?:(?:(?:98|97)-?\d{8})|(?:01-?\d{7}))$/;
// const passwordRegEp =
// /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"/; //A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !.

export const ValdiationRegistrationSchema = Yup.object({
  citizenDto: Yup.object({
    firstName: Yup.string().required("Required!"),
    lastName: Yup.string().required("Required!"),
    citizenship: Yup.string().required("Required!"),
    dob: Yup.string().required("Required!"),
    gender: Yup.string().required("Required!"),
    phoneNum: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required!"),
    email: Yup.string().email("Enter a valid email").required("Required!"),
  }),
  locationDto: Yup.object({
    state: Yup.string().required("Required!"),
    zone: Yup.string().required("Required!"),
    district: Yup.string().required("Required!"),
    municipality: Yup.string().required("Required!"),
    wardNo: Yup.string().required("Required!"),
  }),
  occupationDto: Yup.object({
    name: Yup.string().required("Required!"),
  }),
  medicalConditionDto: Yup.object({
    name: Yup.string().required("Required!"),
  }),
});

export const ValidationVaccineSchema = Yup.object({
  vaccine: Yup.object({
    name: Yup.string().required("Required!"),
    units: Yup.string().required("Required!"),
  }),
  manufacturer: Yup.object({
    name: Yup.string().required("Required!"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .required("Required!"),
  }),
  manufacturerLocationDetails: Yup.object({
    state: Yup.string().required("Required!"),
    zone: Yup.string().required("Required!"),
    district: Yup.string().required("Required!"),
    municipality: Yup.string().required("Required!"),
    wardNumber: Yup.string().required("Required!"),
  }),
  distributor: Yup.object({
    name: Yup.string().required("Required!"),
  }),
  distributorLocationDetails: Yup.object({
    state: Yup.string().required("Required!"),
    zone: Yup.string().required("Required!"),
    district: Yup.string().required("Required!"),
    municipality: Yup.string().required("Required!"),
    wardNumber: Yup.string().required("Required!"),
  }),
});

export const ValidationLoginSchema = Yup.object({
  username: Yup.string().required("Required!"),
  password: Yup.string()
    // .matches(passwordRegEp, "Password is not valid")
    .required("Required!"),
});

export const ValidationSignUpSchema = Yup.object({
  name: Yup.string().required("Required!"),
  userName: Yup.string().required("Required!"),
  password: Yup.string()
    // .matches(passwordRegEp, "Password is not valid")
    .required("Required!"),
  phoneNum: Yup.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required!"),
});
