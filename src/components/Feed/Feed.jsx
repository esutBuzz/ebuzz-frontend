import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import { UserContext } from "../../Context/Context";
import avatar from "/images/avatar.jpg";
import PostContent from "./PostContent/PostContent";
import ToggleButton from "../ToggleButton/ToggleButton";
import FeedModal from "./FeedModal/FeedModal";
import { PostComment, Comments } from "./Comments";
import DisplayEvent from "./Events/DisplayEvent";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "./Feed.scss";
import { BiSolidDownArrow } from "react-icons/bi";
import { BiSolidUpArrow } from "react-icons/bi";
import useFetch from "../../hooks/useFetch";
import { ColorRing } from "react-loader-spinner";

export default function Feed({ className }) {
  //here is where the querry handling would be done
  const { posts, addPost, totalComments, totalLikes, comments } =
    useContext(UserContext);
  const fetchurl = `https://ebuzz.onrender.com/api/v1/users/posts/allPosts`;
  // const { data, isLoadingFetch, errorFetch } = useFetch(fetchurl);
  const [feedData, setFeedData] = useState([]);

  const [theModal, setTheModal] = useState(null);
  const [selectedPostId, setSelectedPostId] = useState(null);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const [isPostCommentVisible, setPostCommentVisible] = useState(false);
  const [commentDisplayState, setCommentDisplayState] = useState(false);
  const [commentDisplayStates, setCommentDisplayStates] = useState({});
  const [isFeedLoading, setIsFeedLoading] = useState(false);
  useEffect(() => {
    // if (data) {
    //   addPost(data);
    //   setFeedData(data);
    // }

    fetchData(`https://ebuzz.onrender.com/api/v1/users/posts/allPosts`)
      .then((data) => {
        setFeedData(data);
        addPost(data);
        localStorage.setItem("feed", data);
        setIsFeedLoading(false);
      })
      .catch((error) => {
        // Handle any errors here
        console.error("Error:", error);
        setIsFeedLoading(false);
      })
      .finally(() => {
        setIsFeedLoading(false);
      });
  }, []);

  const ClickHandler = (id) => {
    if (theModal === id) {
      setTheModal(null);
    } else {
      setTheModal(id);
    }
  };

  function togglePostComment(postId) {
    setSelectedPostId(postId);
    setPostCommentVisible(!isPostCommentVisible);
  }

  function closePostComment() {
    setSelectedPostId(null);
    setPostCommentVisible(false);
  }
  // function toggleCommentsDisplay(postId) {
  //   setSelectedCommentId(postId);
  //   setCommentDisplayState(!commentDisplayState);
  // }
  function toggleCommentsDisplay(postId) {
    setCommentDisplayStates((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }));
  }
  function commentCounter(array, targetId) {
    let count = 0;

    for (let i = 0; i < array.length; i++) {
      if (array[i].id === targetId) {
        count++;
      }
    }

    return count;
  }
  const fetchData = async (url) => {
    setIsFeedLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (error) {
      setIsFeedLoading(false);
      console.error("Error fetching data:", error);

      throw error;
    } finally {
      setIsFeedLoading(false);
    }
  };

  if (isFeedLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={["#711500", "#FFDFD8", "#DBD7DE", "#000000", "#fffff"]}
        />
      </div>
    );
  }
  return (
    // Contains what would be displayed in the feed

    <main id="feed" className={className}>
      {/* when updated, the content would be read from the user's login details */}
      <PostContent />
      <DisplayEvent />

      {/* content here would be mapped from a database, and also be updated by 2 seconds according to the latest. with option to refresh */}

      {feedData
        ?.slice()
        ?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        ?.map((post) => (
          <section id="current-feed" key={post?._id}>
            <nav>
              <img src={avatar} alt="username" title="username" id="user" />
              <h3>
                {post?.author?.username} <small> </small>
              </h3>

              <ToggleButton
                icon={"fa-solid fa-bars-staggered"}
                className={"icon"}
                onClick={() => {
                  ClickHandler(post?._id);
                }}
              />
            </nav>
            {theModal === post?._id && <FeedModal />}
            {/*learn the scss, to work,learn i display the container using postioning, */}
            <div id="feed-container">
              <div id="feed-display">
                <small>
                  Made a post {formatTimestamp(new Date(post?.createdAt))}
                </small>

                <p>{post?.content}</p>

                {post?.files?.length > 0 && (
                  <Swiper
                    grabCursor={true}
                    effect="flip"
                    pagination={{
                      dynamicBullets: true,
                    }}
                    navigation={true}
                    keyboard={true}
                    modules={[Pagination, Navigation, Keyboard]}
                    className="swiper"
                  >
                    {post?.files.map((image, index) => (
                      <SwiperSlide key={index} className="slides">
                        <img src={image} alt={`Image ${index + 1}`} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                )}
              </div>

              <div id="interactions">
                <ToggleButton
                  title="likes"
                  icon="fa-regular fa-heart"
                  className={`btns`}
                />
                <ToggleButton
                  title="comments"
                  icon="fa-regular fa-comment"
                  className={`btns`}
                  onClick={() => togglePostComment(post?._id)}
                />
                <ToggleButton
                  title="share"
                  icon="fa-regular fa-paper-plane"
                  className={`btns`}
                />
              </div>

              <div id="interaction-display">
                <p>{0} Likes</p> &bull;
                <p>{0} Comments</p>
                {commentDisplayStates[post?._id] ? (
                  <BiSolidDownArrow
                    onClick={() => {
                      toggleCommentsDisplay(post?._id);
                    }}
                  />
                ) : (
                  <BiSolidUpArrow
                    onClick={() => {
                      toggleCommentsDisplay(post?._id);
                    }}
                  />
                )}
              </div>

              {isPostCommentVisible && selectedPostId === post?._id ? (
                <PostComment
                  postId={post?._id}
                  authorId={post?.author?._id}
                  closeComment={closePostComment}
                />
              ) : null}
              {commentDisplayStates[post?._id] ? (
                <Comments
                  post={post}
                  postId={post?._id}
                  authorId={post?.author?._id}
                  commentDisplayState={commentDisplayStates[post?._id] || false}
                  selectedCommentId={selectedCommentId}
                />
              ) : (
                ""
              )}
            </div>
          </section>
        ))}
    </main>
  );
}

function formatTimestamp(timestamp) {
  const now = new Date();
  const postTime = new Date(timestamp);
  const timeDiffInSeconds = Math.floor((now - postTime) / 1000);

  if (timeDiffInSeconds < 10) {
    return "just now";
  } else if (timeDiffInSeconds < 60) {
    return `${timeDiffInSeconds} seconds ago`;
  } else if (timeDiffInSeconds < 3600) {
    const minutes = Math.floor(timeDiffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else if (timeDiffInSeconds < 86400) {
    const hours = Math.floor(timeDiffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (timeDiffInSeconds < 604800) {
    const days = Math.floor(timeDiffInSeconds / 86400);
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (timeDiffInSeconds < 2419200) {
    const weeks = Math.floor(timeDiffInSeconds / 604800);
    return `about ${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else {
    const months = Math.floor(timeDiffInSeconds / 2419200);
    return `about ${months} month${months > 1 ? "s" : ""} ago`;
  }
}
