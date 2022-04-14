import { useNavigate } from "react-router-dom";

export default () => {
  let navigate = useNavigate();
  return (
    <div
      onClick={() => {
        navigate("./deploy-pages/detail");
      }}
    >
      "home 111"
    </div>
  );
};
