import { useLocation, useNavigate } from "react-router-dom";

export default function Edit() {
  const navigate = useNavigate();
  const location = useLocation();
  const { content, id } = location.state;
  const onHandlerSubmit = (e) => {
    e.preventDefault();
    let data = { content: e.target.content.value, id: id };
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
    navigate(`/posts/${id}`, {
      replace: true,
      state: { content: data.content, id: id },
    });
  };

  const onGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="post">
      <form onSubmit={onHandlerSubmit}>
        <input name="content" defaultValue={content} />
        <button type="submit">Сохранить</button>
      </form>
      <span className="back" onClick={onGoBack}>
        X
      </span>
    </div>
  );
}
