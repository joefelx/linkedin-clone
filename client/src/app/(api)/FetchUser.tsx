import { useMutation } from "@apollo/client";
import { LOGIN, SIGNUP } from "../../mutations/userMutations";

export function SignUpUser(name: String, email: String, password: String) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [signUp, { data, loading, error }] = useMutation(SIGNUP, {
    variables: {
      name,
      email,
      password,
    },
  });

  return { signUp, data, loading, error };
}

export function LoginUser(email: String, password: String) {
  const [login, { data, loading, error }] = useMutation(LOGIN, {
    variables: {
      email,
      password,
    },
  });

  return { login, data, loading, error };
}
