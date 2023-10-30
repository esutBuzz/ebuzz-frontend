import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../../../../Context/Context";
import ToggleButton from "../../../ToggleButton/ToggleButton";
import FeedModal from "../../../Feed/FeedModal/FeedModal";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper/modules";
import avatar from "/images/avatar.jpg";
import "./profileFeed.scss";
import useFetch from "../../../../hooks/useFetch";
import { ColorRing } from "react-loader-spinner";

function ProfileFeed() {
  const [profileFeedData, setProfileFeedData] = useState(null);
  const { totalLikes, comments, addUserDetails } = useContext(UserContext);
  const {
    user: { _id },
    token,
  } = JSON.parse(sessionStorage.getItem("user"));

  // const storedUserId = localStorage.getItem("userId");

  const secondFetchUrl = `https://ebuzz.onrender.com/api/v1/users/${_id}/posts`;
  const {
    data: secondData,
    errorFetch: secondError,
    isLoadingFetch: secondIsLoading,
  } = useFetch(secondFetchUrl);
  const fetchurl = `https://ebuzz.onrender.com/api/v1/users/${_id}`;
  const {
    data: firstData,
    errorFetch: firstError,
    isLoadingFetch: firstIsLoading,
  } = useFetch(fetchurl);

  useEffect(() => {
    // console.log(secondData, firstData);

    if (secondData) {
      addUserDetails(firstData);
      setProfileFeedData(secondData);
    }
  }, [secondData]);
  const [theModal, setTheModal] = useState(null);

  const ClickHandler = (id) => {
    if (theModal === id) {
      setTheModal(null);
    } else {
      setTheModal(id);
    }
  };
  if (secondIsLoading) {
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
    <div id="feed">
      {
        // .slice()
        // .sort((a, b) => b.createdAt - a.createdAt)
        profileFeedData
          ?.slice()
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          .map((post) => (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderBottom: "2px #F5F2F2 solid",
              }}
            >
              <section id="profile-feed" key={post?._id}>
                <nav>
                  <img src={avatar} alt="username" title="username" id="user" />
                  <h3>
                    {firstData?.user.username}{" "}
                    <small>{firstData?.user.email}</small>
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
                    <small>Made a post </small>

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
                        {post?.files?.map((image, index) => (
                          <SwiperSlide key={index} className="slides">
                            <img
                              style={{ width: "209px", height: "259px" }}
                              src={image}
                              alt={`Image ${index + 1}`}
                            />
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
                    />
                    <ToggleButton
                      title="share"
                      icon="fa-regular fa-paper-plane"
                      className={`btns`}
                    />
                  </div>

                  <div id="interaction-display">
                    <p>{0}Likes</p> &bull;
                    <p>Comments</p>
                  </div>

                  {/* 
                        {isPostCommentVisible && selectedPostId === post.ide ? (
                            <PostComment postId={post.ide} closeComment={closePostComment} />
                        ) : null}

                        
                        <Comments post={post} /> */}
                </div>
              </section>
            </div>
          ))
      }
    </div>
  );
}

export default ProfileFeed;
