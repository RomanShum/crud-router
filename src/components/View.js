import { useLocation, Link } from "react-router-dom";

export default function View() {
  const location = useLocation();
  const { content, id } = location.state;

  const onHandlerDelete = () => {
    fetch(`http://localhost:7777/posts/${id}`, { method: "DELETE" });
    window.location.replace("/");
  };

  return (
    <>
      <div className="post">
        <div>{content}</div>
        <button className="button">
          <Link to={`/edit/${id}`} state={{ content: content, id: id }}>
            Изменить
          </Link>
        </button>
        <button className="button" onClick={onHandlerDelete}>
          Удалить
        </button>
      </div>
    </>
  );
}
