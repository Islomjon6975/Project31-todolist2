import React, { Component } from "react";
import Header from "./Header";
import "./Main.css";
import Table from "./Table";
import { students } from "./Data";
import Footer from "./Footer";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: students,
      name: "",
      status: "",
      age: "",
      search: "",
      edit: {},
      sort: "ASC",
      namee: "",
      statuss: "",
      agee: "",
    };
  }
  render() {
    const { name, status, age, edit, data } = this.state;

    const onDelete = (id) => {
      this.setState(({ data }) => {
        const newArr = data.filter((item) => item.id !== id);
        return {
          data: newArr,
        };
      });
    };

    const onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const onChangee = (e) => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };

    const onAdd = () => {
      this.setState(({ data }) => {
        const newData = {
          id: this.state.data.length + 1,
          name: this.state.namee,
          status: this.state.statuss,
          age: this.state.agee,
        };
        const newArr = [...data, newData];
        return {
          data: newArr,
          namee: "",
          statuss: "",
          agee: "",
        };
      });
    };

    const onSearch = (e) => {
      let res = students.filter((post) =>
        post.name.toLowerCase().includes(e.target.value.toLowerCase())
      );

      this.setState({ search: e.target.value });
      this.setState({ data: res });
    };

    const onEdit = (value) => {
      this.setState(() => {
        return {
          edit: value,
          name: value.name,
          status: value.status,
          age: value.age,
          select: "",
        };
      });
    };

    const onUpdate = () => {
      let res = data.map((value) =>
        value.id === edit.id
          ? { ...value, name: name, status: status, age: age }
          : value
      );
      this.setState({ data: res, edit: {} });
    };

    const onSelect = (e) => {
      const sorted = [...data].sort((a, b) => {
        if (e.target.value === "ID") {
          return a.id > b.id;
        } else if (e.target.value === "Name") {
          return a.name.toLowerCase() > b.name.toLowerCase();
        } else if (e.target.value === "Status") {
          return a.status.toLowerCase() > b.status.toLowerCase();
        } else if (e.target.value === "Age") {
          return a.age < b.age;
        }
      });

      this.setState({ data: sorted });
    };

    return (
      <div className="container">
        <Header
          onSearch={onSearch}
          search={this.state.search}
          onSelect={onSelect}
        />
        {this.state.data.length ? (
          <Table
            data={this.state.data}
            onDelete={onDelete}
            onEdit={onEdit}
            edit={edit}
            onChange={onChange}
            name={name}
            status={status}
            age={age}
            onUpdate={onUpdate}
          />
        ) : (
          <h2 className="nothing">Add something...</h2>
        )}

        <Footer
          onAdd={onAdd}
          onChange={onChangee}
          name={this.state.namee}
          status={this.state.statuss}
          age={this.state.agee}
        />
      </div>
    );
  }
}
export default Main;
