import Image from 'next/image';

import SignInForm from './SignInForm';

export default function SignInPage() {
  return (
    <div className="relative translate-y-40 md:translate-y-36">
      <div className="mx-auto w-96 md:hidden">
        <Image src="/img/renio-short.svg" alt="renio" width={1} height={1} className="w-28" />
      </div>
      <div className="mx-auto w-fit hidden md:block">
        <Image src="/img/renio-full.svg" alt="renio" width={1} height={1} className="w-96" />
      </div>
      <div className="mt-4 md:mt-10 mx-auto card max-w-96">
        <SignInForm />
      </div>
    </div>
  );
}
