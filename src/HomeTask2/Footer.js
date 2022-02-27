import "./Footer.css";
export default function Footer(props) {
  return (
    <div className="footer-container">
      <input
        type="text"
        onChange={props.onChange}
        name="namee"
        placeholder="Name"
        value={props.name}
      />
      <input
        type="text"
        onChange={props.onChange}
        name="statuss"
        placeholder="Status"
        value={props.status}
      />
      <input
        type="text"
        onChange={props.onChange}
        name="agee"
        placeholder="Age"
        value={props.age}
      />
      <button onClick={props.onAdd}>Add</button>
    </div>
  );
}
