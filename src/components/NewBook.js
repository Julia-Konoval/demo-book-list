import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Bookform.scss";
import axios from "axios";
// import { useBookContext } from "./contexts/BookContext";
import { useForm } from "react-hook-form";

export default function NewBook() {
  const { register, handleSubmit, errors } = useForm();
  let history = useHistory();
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  async function onSubmit(data) {
    try {
      const response = await axios.post("http://localhost:8000/books", data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      history.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="book_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Book title</label>
          <input
            name="book_title"
            placeholder="Alice in Wonderland"
            ref={register({
              required: true,
              minLength: 2,
            })}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              border: errors.title
                ? "1px solid red"
                : title.length > 5
                ? "1px solid green"
                : "",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Author name</label>
          <input
            name="author_name"
            placeholder="Bill Luo"
            ref={register({
              required: true,
              minLength: 2,
            })}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
              border: errors.author
                ? "1px solid red"
                : title.length > 5
                ? "1px solid green"
                : "",
            }}
            type="text"
          />
        </div>

        <div>
          <label>Category</label>
          <select ref={register} name="category">
            <option value="0">Fiction</option>
            <option value="1">Non-fiction</option>
          </select>
        </div>

        <div>
          <label>ISBN</label>
          <input
            name="ISBN"
            placeholder="Name"
            ref={register({
              required: true,
              minLength: 4,
              type: Number,
            })}
          />
        </div>

        <div>
          <label>Actions</label>
          <button type="reset">Edit</button>
          <button type="reset">Delete</button>
        </div>

        <input type="submit" />
      </form>
    </div>
  );
}
