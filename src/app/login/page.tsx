import LoginForm from "./LoginForm";

const LoginPage = () => {
    return (
        <div className="mx-auto px-24 py-10 md:mt-52">
            <p className="text-2xl font-semibold text-center my-4">Welcome to <span className="font-bold text-2xl">Back</span></p>
            <LoginForm></LoginForm>
        </div>
    );
};

export default LoginPage;