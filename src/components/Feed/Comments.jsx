import styled from "styled-components";
import avatar from "/images/avatar.jpg";
import { colors, values } from "../../StyledComponents/Styles";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import ToggleButton from "../ToggleButton/ToggleButton";
import { nanoid } from "nanoid";
import usePost from "../../hooks/usePost";
import useFetch from "../../hooks/useFetch";
import { useSearchContext } from "../../Context/SearchContext";

const PostCommentDisplay = styled.section`
  position: relative;
  width: 100%;
  background: ${colors.white};
  display: flex;
  align-items: center;
  gap: 1em;

  textarea {
    position: relative;
    width: 100%;
    background: ${colors.ltGray};
    font-family: ${values.font};
    font-size: ${values.text};
    padding: 0.5em;
    color: ${colors.black};
    border-radius: ${values.smallRadius};
    outline: none;
    border: none;
    resize: none;
  }

  .comment-btn {
    background: ${colors.brown};
    color: ${colors.white};

    &.disable {
      background: ${colors.brownAccent};
    }
  }
`;

const CommentsDisplay = styled.section`
  position: relative;
  width: 100%;
  padding: 1em 0;
  background: ${colors.white};
  border-bottom-left-radius: ${values.smallRadius};
  border-bottom-right-radius: ${values.smallRadius};
  display: flex;
  flex-direction: column;
  gap: 0.2em;

  article {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1em;
    background: ${colors.ltWhite};
    padding: 0.5em;
    border-radius: ${values.smallRadius};
  }

  img {
    position: relative;
    height: calc(${values.wkHeight} * 0.025);
    width: calc(${values.wkWidth} * 0.025);
    border-radius: ${values.radius};
  }

  p {
    color: ${colors.gray};
    width: 100%;
    text-align: left;
  }
`;
export function PostComment({ closeComment, postId, authorId }) {
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState("");
  const [sentData, setSentData] = useState({});
  const { userDetails, userToken, addComment } = useContext(UserContext);

  const handlePost = () => {
    const posturl = `https://ebuzz.onrender.com/api/v1/users/${authorId}/posts/${postId}/comments`;
    // Replace 'https://example.com/api/posts' with your actual API endpoint
    const apiUrl = posturl;
    const newComment = {
      author: authorId,
      postId: postId,
      content: comment,
    };
    setSentData(newComment);
    setComment("");
    closeComment();
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((response) => {
        if (response.ok) {
          console.log(response.json());
        } else {
          throw new Error("Failed to post data");
        }
      })
      .then((data) => {
        console.log("Data posted successfully:", data);
        // Handle success or update the UI
      })
      .catch((error) => {
        console.error("Error posting data:", error);
        // Handle the error or show an error message
      });
  };
  //const { addComment } = useContext(UserContext);
  const isCommentEmpty = comment.trim() === "";

  function handleCommentChange(e) {
    if (e.target.value.length <= 500) {
      setComment(e.target.value);
    }
  }

  function handleComment() {
    if (!isCommentEmpty) {
      //   addComment({
      //     id: postId,
      //     text: comment,
      //     idHandler: nanoid(),
      //   });
      handlePost();
    }
  }

  return (
    <PostCommentDisplay>
      <textarea
        name="comment"
        id="comment"
        placeholder="Write a Comment!"
        value={comment}
        onChange={handleCommentChange}
      ></textarea>
      <ToggleButton
        text="Comment"
        disabled={isCommentEmpty}
        onClick={handleComment}
        className="comment-btn"
      />
    </PostCommentDisplay>
  );
}

export function Comments({ post, postId, authorId, commentDisplayState }) {
  const [allComments, setAllComments] = useState([]);
  const { comments, addComment } = useContext(UserContext);
  const posturl = `https://ebuzz.onrender.com/api/v1/users/${authorId}/posts/${postId}/comments`;

  const { data, isLoadingFetch, errorFetch } = useFetch(posturl);

  useEffect(() => {
    if (data) {
      addComment(data);
      setAllComments(data);
      console.log(data);
    }
  }, [data]);
  const postComments = comments?.filter(
    (comment) => comment?.postId === post?._id
  );
  console.log(postComments);
  return commentDisplayState && postComments?.length > 0 ? (
    <CommentsDisplay>
      {postComments?.map((comment) => (
        <article key={comment._id}>
          <img src={avatar} alt="avatar" />
          <p>{comment.content}</p>
        </article>
      ))}
    </CommentsDisplay>
  ) : (
    <CommentsDisplay style={{ textAlign: "center" }}>
      No comment yet on this post
    </CommentsDisplay>
  );
}
