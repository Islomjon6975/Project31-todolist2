import "./Table.css";

export default function Table(props) {
  const {
    data,
    onDelete,
    onEdit,
    edit,
    onChange,
    name,
    status,
    age,
    onUpdate,
  } = props;
  return (
    <div className="table-container">
      <table>
      
        <thead>
          <tr>
            <th>ID</th>
            <th className="name">Name</th>
            <th>Status</th>
            <th>Age</th>
            <th>Edit</th>
          </tr>
        </thead>
      
        <tbody>
          {data.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td className="name">
                {edit.id === post.id ? (
                  <input
                    name="name"
                    className="changee"
                    onChange={onChange}
                    type="text"
                    value={name}
                  />
                ) : (
                  post.name
                )}
              </td>
              <td>
                {edit.id === post.id ? (
                  <input
                    name="status"
                    className="changee"
                    onChange={onChange}
                    type="text"
                    value={status}
                  />
                ) : (
                  post.status
                )}
              </td>
              <td>
                {edit.id === post.id ? (
                  <input
                    name="age"
                    className="changee"
                    onChange={onChange}
                    type="text"
                    value={age}
                  />
                ) : (
                  post.age
                )}
              </td>
              <td>
                <i
                  onClick={() => onDelete(post.id)}
                  className="fas fa-trash-alt"
                ></i>
                {edit.id === post.id ? (
                  <i onClick={onUpdate} className="far fa-save"></i>
                ) : (
                  <i onClick={() => onEdit(post)} className="fas fa-edit"></i>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
