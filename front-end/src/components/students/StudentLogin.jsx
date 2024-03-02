import { z } from "zod";
import { useForm } from 'react-hook-form';

const formSchema = z.object({
  email: z.string().email("Email is required and must be valid").min(8).max(30),
  password: z.string().nonempty('required').min(6).max(30),
});
import { axiosClient } from '../../api/axios';
const zodResolver = async (values) => {
  try {
    const validatedData = formSchema.parse(values);
    return {
      values: validatedData,
      errors: {},
    };
  } catch (error) {
    return {
      values: {},
      errors: error.errors.reduce((acc, validationError) => {
        acc[validationError.path[0]] = {
          message: validationError.message,
          type: validationError.type,
        };
        return acc;
      }, {}),
    };
  }
};

export default function StudentLogin() {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver,
  });
    const onSubmit =   async (values) => {
  try {
    const response = await axiosClient.post('/login', values);
    // Handle the response
    console.log(response.data);
  } catch (error) {
    // Handle errors
    console.error(error);
  }
  };
  return <>
  <div className="w-full max-w-xs container mx-auto">
  <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">
        Full Name
      </label>
    </div>
    <div className="md:w-2/3">
        <input  {...register('email')} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
          {errors.email && <p className="text-red-600">{errors.email.message}</p>}
    </div>
  </div>
  <div className="md:flex md:items-center mb-6">
    <div className="md:w-1/3">
      <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-password">
        Password
      </label>
    </div>
    <div className="md:w-2/3">
        <input {...register('password')} className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="******************" />
         {errors.password && <p className="text-red-600	">{errors.password.message}</p>}

    </div>
  </div>
  <div className="md:flex md:items-center">
    <div className="md:w-1/3"></div>
    <div className="md:w-2/3">
      <input type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
    </div>
  </div>
</form>
</div>
</>
}