import CryptoJS from "crypto-js";

const secretKey = "HTh/cRZ9BB[+!jZ=";

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
};

export const decryptData = (data) => {
  const bytes = CryptoJS.AES.decrypt(data, secretKey);
  return JSON.parse(JSON.parse(bytes.toString(CryptoJS.enc.Utf8)));
};
