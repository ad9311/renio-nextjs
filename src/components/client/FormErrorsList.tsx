import { FormErrors } from '@/types/error';

export default function FormErrorsList({ errors }: { errors: FormErrors }) {
  if (!errors) {
    return null;
  }

  const mappedErrors = errors.map((error, index) => <li key={`${error}-${index}`}>{error}</li>);

  return <ul>{mappedErrors}</ul>;
}
