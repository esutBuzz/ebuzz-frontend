import { useContext, useEffect, useState } from "react";
import avatar from "/images/avatar.jpg";
import img from "/icons/img.svg";
import gif from "/icons/gif.svg";
import pen from "/icons/pen.svg";
import ToggleButton from "../../ToggleButton/ToggleButton";
import "./PostContent.scss";
import { UserContext } from "../../../Context/Context";
import Event from "../Events/PostEvent";
import usePost from "../../../hooks/usePost";
import useFetch from "../../../hooks/useFetch";

const items = [
  {
    id: 1,
    type: "image",
    image: img,
    title: "Upload images",
    accept: ".png, .jpg, .jpeg",
  },
  {
    id: 2,
    type: "gif",
    image: gif,
    title: "Upload gifs",
    accept: ".gif",
  },
];

// the post button here would update the post to the database and be rendered in the feed

export default function PostContent() {
  const [text, setText] = useState("");
  const [uploadedImages, setUploadedImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [fileCount, setFileCount] = useState(0);
  //const [posts, setPosts] = useState([]);
  const [active, setActive] = useState(false);
  const [formData, setFormData] = useState(new FormData());
  const { addPost, userId, userToken, addUserDetails } =
    useContext(UserContext);
  const storedUserId = localStorage.getItem("userId");
  const posturl = `https://ebuzz.onrender.com/api/v1/users/${storedUserId}/posts`;

  const { response, error, isLoading } = usePost(posturl, formData);

  function handleModalActive() {
    setActive(!active);
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file && fileCount < 4) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImages((prevImages) => [...prevImages, imageUrl]);
      setSelectedFiles((prevFiles) => [...prevFiles, file]);
      setFileCount(fileCount + 1);

      // Disable all file input elements if the file count reaches 4
      if (fileCount + 1 >= 4) {
        disableFileInputs();
      }
    }
  };

  const handleTextChange = (e) => {
    // Check if the text length exceeds the maximum allowed (500 characters)
    if (e.target.value.length <= 500) {
      setText(e.target.value);
    }
  };

  const handleDeleteImage = (index) => {
    const updatedImages = [...uploadedImages];
    updatedImages.splice(index, 1);
    setUploadedImages(updatedImages);
    setFileCount(fileCount - 1);

    // Enable all file input elements when an image is deleted
    enableFileInputs();
  };

  const disableFileInputs = () => {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    console.log(fileInputs, "fileinput");
    fileInputs.forEach((input) => {
      input.disabled = true;
    });
  };

  const enableFileInputs = () => {
    const fileInputs = document.querySelectorAll('input[type="file"]');
    fileInputs.forEach((input) => {
      input.disabled = false;
    });
  };

  const isPostEmpty = text.trim() === "" && uploadedImages.length === 0;

  const handlePost = () => {
    if (!isPostEmpty) {
      const newPost = {
        id: Date.now(),
        text: text,
        images: uploadedImages,
        timestamp: Date.now(),
      };
      const newFormData = new FormData();
      newFormData.append("author", userId);
      newFormData.append("content", text);

      for (let i = 0; i < selectedFiles.length; i++) {
        newFormData.append("files", selectedFiles[i]);
      }

      setFormData(newFormData);
      //addPost(newPost);
      //setPosts(formData);
      setSelectedFiles([]);
      setText("");
      setUploadedImages([]);
      setFileCount(0);
    }
  };

  return (
    <section id="post-content">
      <img src={avatar} id="avatar" alt="username" title="username" />
      <aside>
        <span id="edit-display">
          <textarea
            name="text"
            id="text"
            placeholder="What is on your mind?"
            value={text}
            onChange={handleTextChange}
            maxLength={500}
          ></textarea>
          <div id="graphic-display">
            {uploadedImages.map((imageUrl, index) => (
              <div id="gr-container" key={index}>
                <img
                  src={imageUrl}
                  alt="Uploaded Image"
                  className="uploaded-image"
                />
                <ToggleButton
                  icon={"fa-solid fa-x"}
                  title={"delete"}
                  className={"del-btn"}
                  onClick={() => handleDeleteImage(index)}
                />
              </div>
            ))}
          </div>
        </span>
        <menu>
          <div id="graphic-upload">
            {items.map((item) => (
              <span id="upload" key={item.id}>
                <label htmlFor={item.id}>
                  <img src={item.image} alt={item.title} title={item.title} />
                </label>
                <input
                  type="file"
                  name="image"
                  id={item.id}
                  accept="image/*, video/*"
                  required
                  multiple
                  onChange={handleImageUpload}
                />
              </span>
            ))}
            <ToggleButton
              image={pen}
              title="pen"
              className="pen"
              onClick={handleModalActive}
            />
          </div>

          <ToggleButton
            text={"Post"}
            className={"post-btn"}
            disabled={isPostEmpty}
            onClick={handlePost}
          />
        </menu>
      </aside>

      <Event
        className={`event-modal ${!active ? "active-modal" : ""}`}
        closeModal={handleModalActive}
      />
    </section>
  );
}
