export function authLogin(email: String) {
  if (!email) {

    const error = { message: 'El usuario no existe' }
    return error;

  }
};