import * as yup from "yup";

const userSchema = yup.object({
  firstName: yup.string().required(),
  middleName: yup.string().notRequired(),
  lastName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required(),
});

export default userSchema;
