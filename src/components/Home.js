import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7777/posts")
      .then((resp) => resp.json())
      .then(function (data) {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="add_new_post">
        <button>
          <Link to="/posts/new">Создать пост</Link>
        </button>
      </div>
      {data.map((item) => (
        <Link
          to={`/posts/${item.id}`}
          state={{ content: item.content, id: item.id }}
        >
          <div className="post">
            <p key={item.created}>{item.content} </p>
          </div>
        </Link>
      ))}
    </>
  );
}
