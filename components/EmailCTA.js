import { useForm } from 'react-hook-form'
import * as Fathom from 'fathom-client'
import { ErrorMessage } from '@hookform/error-message'
import SuccessMessage from '@/components/SuccessMessage'

const EmailCTA = ({
  title = 'Håll dig uppdaterad, få det senaste direkt i din brevlåda',
  description = '',
  list = 'monthly',
  cta = 'Jag vill bli uppdaterad!',
  embedded = false,
}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm()

  const subscribe = async ({ email }) => {
    const res = await fetch(`/api/emailoctopus?email=${email}&list=${list}`)
    if (res.ok) {
      Fathom.trackGoal('HJIZXWMZ', 0)
    }
    return res
  }

  const onSubmit = (data) => subscribe(data)

  return (
    <div className="ic">
      <div className="mx-auto flex">
        <div
          className={`${embedded ? 'px-4 py-2' : 'px-12 py-12'
            } bg-gray-100 dark:bg-gray-800 rounded-xl grid items-center`}
        >
          {isSubmitSuccessful ? (
            <SuccessMessage handleReset={reset} />
          ) : (
            <>
              <div className=" items-center ">
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>

              </div>


              <div className="sm:w-full sm:max-w-md  xl:flex-1">
                <form className="sm:flex  flex-col" onSubmit={handleSubmit(onSubmit)}>
                  <label htmlFor="email-address" className="sr-only">
                    Epost adress
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="w-full border-gray-500 dark:border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-gray-800 dark:focus:ring-white rounded-md text-black"
                    placeholder="E-postadress"
                    {...register('email', {
                      required: 'Email is required.',
                      pattern: {
                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                      },
                      message: 'Please enter a vaild email.',
                    })}
                    disabled={isSubmitting}
                  />
                  <ErrorMessage errors={errors} name="email" />

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:w-auto sm:flex-shrink-0"
                  >
                    {cta}
                  </button>
                </form>

              </div>



            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default EmailCTA
