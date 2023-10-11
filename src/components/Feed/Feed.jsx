import { useContext, useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, Keyboard } from 'swiper/modules'
import { UserContext } from '../../Context/Context'
import avatar from '/images/avatar.jpg'
import PostContent from './PostContent/PostContent'
import ToggleButton from '../ToggleButton/ToggleButton'
import FeedModal from './FeedModal/FeedModal'
import { PostComment, Comments } from './Comments'
import DisplayEvent from './Events/DisplayEvent'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './Feed.scss';


export default function Feed({className}) {
    //here is where the querry handling would be done
    const {posts, totalComments, totalLikes} = useContext(UserContext);
    
    const [theModal , setTheModal] = useState(null);

    const ClickHandler =(id)=>{
        if( theModal === id){
            setTheModal(null)
        }else{
            setTheModal(id)
        }
    }

    const [selectedPostId, setSelectedPostId] = useState(null);
    const [isPostCommentVisible, setPostCommentVisible] = useState(false);

    function togglePostComment(postId) {
        setSelectedPostId(postId);
        setPostCommentVisible(true);
    };

    function closePostComment() {
        setSelectedPostId(null);
        setPostCommentVisible(false);
    };

    return (
    // Contains what would be displayed in the feed

        <main id="feed" className={className}>
            {/* when updated, the content would be read from the user's login details */}
            <PostContent />
            <DisplayEvent />

            {/* content here would be mapped from a database, and also be updated by 2 seconds according to the latest. with option to refresh */}
            
            {posts.slice().sort((a, b) => b.timestamp - a.timestamp).map((post) => (
                <section id="current-feed" key={post.id}>
                    <nav>
                        <img src={avatar} alt="username" title='username' id='user' />
                        <h3>ObiWan Kenobi <small>@jediobiwan</small></h3>

                        <ToggleButton
                            icon={'fa-solid fa-bars-staggered'}
                            className={'icon'}
                            onClick={()=>{ClickHandler(post.ide)}}
                        />
                    </nav>
                        { theModal === post.ide && <FeedModal/>}

                        {/*learn the scss, to work,learn i display the container using postioning, */}
                    <div id="feed-container">
                        <div id="feed-display">
                            <small>Made a post {formatTimestamp(post.timestamp)}</small>

                            <p>{posts.text}</p>

                            {post.images.length > 0 &&(
                                <Swiper
                                    grabCursor={true}
                                    effect='flip'
                                    pagination={{
                                        dynamicBullets: true,
                                    }}
                                    navigation={true}
                                    keyboard={true}
                                    modules={[Pagination, Navigation, Keyboard]}
                                    className='swiper'
                                >
                                    {post.images.map((image, index) => (
                                        <SwiperSlide key={index} className='slides'>
                                            <img src={image} alt={`Image ${index + 1}`} />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                                
                        <div id='interactions'>
                            <ToggleButton
                                title='likes'
                                icon='fa-regular fa-heart'
                                className={`btns`}
                            />
                            <ToggleButton
                                title='comments'
                                icon='fa-regular fa-comment'
                                className={`btns`}
                                onClick={() => togglePostComment(post.id)}
                            />
                            <ToggleButton
                                title='share'
                                icon='fa-regular fa-paper-plane'
                                className={`btns`}
                            />
                        </div>

                        <div id="interaction-display">
                            <p>{totalLikes}Likes</p> &bull;
                            <p>{totalComments}Comments</p>
                        </div>

                        {isPostCommentVisible && selectedPostId === post.id ? (
                            <PostComment postId={post.id} closeComment={closePostComment} />
                        ) : null}

                        
                        <Comments post={post} />
                    </div>
                </section>
            ))}
        </main>
    )
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
  