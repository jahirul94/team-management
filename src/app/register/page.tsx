import RegisterForm from "./RegisterForm";

export const metadata = {
    title: "Register",
};

const RegisterPage = () => {
    
    return (
        <div className="mx-auto px-24 py-10 md:mt-52">
            <p className="text-2xl font-semibold text-center my-4">Please Sign up an <span className="font-bold text-2xl">Account</span></p>
           <RegisterForm></RegisterForm>
        </div>
    );
};

export default RegisterPage;