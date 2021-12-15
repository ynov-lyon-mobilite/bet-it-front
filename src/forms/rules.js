export const validateMandatoryField = value => !!value || "Requis";

export const validateMaxLength = length => value =>
  (value && value.length <= length) || `${length} caractères maximum`;

export const validateMinLength = length => value =>
  (value && value.length > length) || `${length} caractères minimum`;

export const validateEmail = value => {
  const pattern = /.+@.+\..+/;
  return pattern.test(value) || "E-mail invalide";
};

export const validateConfirmPassword = password => value =>
  (value && value === password) || "Les mots de passe ne sont pas identiques";

export const validateBirthdate = value => {
  const error = "Vous devez être âgé d'au moins 18 ans pour vous inscrire.";
  if (value) {
    const now = new Date();
    const birthday = new Date(value);
    return now.getFullYear() - birthday.getFullYear() >= 18 || error;
  }
  return error;
};

export const validatePhoneNumber = value => {
  const pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){3}([-. ]?[0-9]{2})$/;
  return pattern.test(value) || "Numéro de téléphone invalide";
};
