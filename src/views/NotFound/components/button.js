import { useNavigate } from "react-router-dom";

function Button() {
  const navigate = useNavigate();
  return (
    <button onClick={() => { navigate('/') }} className="mt-20 font-mono text-white bg-gray-800 border-none outline-none px-8 py-4 text-sm uppercase cursor-pointer hover:bg-gray-700 focus:bg-gray-700 active:bg-gray-700">
      Back to homepage
    </button>
  );
}

export default Button;
