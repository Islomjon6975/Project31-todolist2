import "./Header.css";
export default function Header(props) {
  return (
    <div className="header-container">
      <h1>Webbrain Academy</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          onChange={props.onSearch}
          value={props.search}
        />
        <select name="select" onClick={props.onSelect}>
          <option value="ID">ID</option>
          <option value="Name">Name</option>
          <option value="Status">Status</option>
          <option value="Age">Age</option>
        </select>
      </div>

      
    </div>
  );
}
