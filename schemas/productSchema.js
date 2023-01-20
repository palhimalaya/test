import * as yup from "yup";

const productSchema = yup.object().shape({
  productName: yup.string().required(),
  brand: yup.string().required(),
  sellingPrice: yup.number().required().positive(),
  costPrice: yup.number().required().positive(),
  category: yup.string().required(),
  quantityInStocks: yup.number().required().positive(),
  buyDate: yup.date(),
  descritpion: yup.string(),
});

export default productSchema;
