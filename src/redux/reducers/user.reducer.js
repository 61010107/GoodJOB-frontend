import {
  ACTION_USER_SET,
  ACTION_USER_SET_FIRSTNAME,
  ACTION_USER_SET_LASTNAME,
  ACTION_USER_SET_AGE,
  ACTION_USER_SET_GENDER,
  ACTION_USER_SET_ID_CARD,
  ACTION_USER_SET_PHONE_NUMBER,
  ACTION_USER_SET_INTRODUCE,
  ACTION_USER_SET_PROVINCE,
  ACTION_USER_SET_PHOTO_URL,
  ACTION_USER_SET_INTERESTED,
  ACTION_USER_SET_ROLE,
  ACTION_USER_SET_BANK,
  ACTION_USER_SET_BKNK_ACCOUNT,
} from "../constants";
import api from "../../API/API";

const initialState = {
  email: "",
  photoURL: "",
  firstname: "",
  lastname: "",
  age: "",
  phone_number: "",
  id_card: "",
  gender: "",
  introduce: "",
  province: "",
  interested: [],
  role: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ACTION_USER_SET:
      return {
        ...state,
        email: payload.email,
        photoURL: payload.photoURL,
        firstname: payload.firstname,
        lastname: payload.lastname,
        age: payload.age,
        phone_number: payload.phone_number,
        id_card: payload.id_card,
        gender: payload.gender,
        introduce: payload.introduce,
        province: payload.province,
        interested: payload.interested,
        role: payload.role,
        bank_account : payload.bank_account,
        bank : payload.bank
      };

    case ACTION_USER_SET_PHOTO_URL:
      return { ...state, photoURL: payload };

    case ACTION_USER_SET_FIRSTNAME:
      return { ...state, firstname: payload };

    case ACTION_USER_SET_LASTNAME:
      return { ...state, lastname: payload };

    case ACTION_USER_SET_AGE:
      return { ...state, age: payload };

    case ACTION_USER_SET_PHONE_NUMBER:
      return { ...state, phone_number: payload };

    case ACTION_USER_SET_ID_CARD:
      return { ...state, id_card: payload };

    case ACTION_USER_SET_GENDER:
      return { ...state, gender: payload };

    case ACTION_USER_SET_INTRODUCE:
      return { ...state, introduce: payload };

    case ACTION_USER_SET_PROVINCE:
      return { ...state, province: payload };

    case ACTION_USER_SET_INTERESTED:
      return { ...state, interested: payload };

    case ACTION_USER_SET_ROLE: {
      api.user.update.role(payload);
      return { ...state, role: payload };
    }
    case ACTION_USER_SET_BKNK_ACCOUNT:
      return { ...state, bank_account: payload };

    case ACTION_USER_SET_BANK:
      return { ...state, bank: payload };

    default:
      return state;
  }
};
