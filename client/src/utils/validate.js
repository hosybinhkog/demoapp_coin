export function validate(values) {
  const { username, email, password } = values;

  const errors = {
    email: [],
    number: 0,
  };

  if (email) {
    if (email.split('').filter((x) => x === '@').length !== 1) {
      errors.email.push('Chưa đúng format email');
      errors.number++;
    }
    if (email.length < 5) {
      errors.email.push('email phải có nhiều hơn 5 chữ số');
      errors.number++;
    }
    if (email.indexOf('.') === -1) {
      errors.number++;
      errors.email = [...errors.email, 'email phải có dấu .'];
    }
  }

  if (username) {
    if (username.length < 6) {
      errors.number++;
      errors.username = 'Tên phải dài hơn 6 ký tự';
    }
  }

  if (password) {
    if (password.length < 8) {
      errors.password = 'password phải có nhiều hơn 8 chữ số';
      errors.number++;
    }
  }

  return errors;
}
