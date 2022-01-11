import { useNavigate } from "react-router-dom";

export default function New() {
  const navigate = useNavigate();
  const onHandlerSubmit = (e) => {
    e.preventDefault();
    let data = { content: e.target.content.value, id: 0 };
    e.target.content.value = "";
    let fetchData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };

    if (data.content === "") {
      return;
    }
    fetch("http://localhost:7777/posts", fetchData);
    window.location.replace("/");
  };

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="post">
      <span className="back" onClick={onGoBack}>
        X
      </span>
      <form onSubmit={onHandlerSubmit}>
        <input name="content" />
        <button type="submit">Опубликовать</button>
      </form>
    </div>
  );
}
