import { useNavigate } from "react-router-dom";

export default () => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("./detail");
      }}
    >
      "home PAGE"
    </div>
  );
};
