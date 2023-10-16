import React,{useContext,useState} from 'react';
import { UserContext } from '../../../../Context/Context';
import ToggleButton from '../../../ToggleButton/ToggleButton';
import FeedModal from '../../../Feed/FeedModal/FeedModal';
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, Keyboard } from 'swiper/modules'
import avatar from '/images/avatar.jpg';
import './profileFeed.scss'

function ProfileFeed() {
    const {posts, totalLikes,comments} = useContext(UserContext);
    const [theModal , setTheModal] = useState(null);

    const ClickHandler =(id)=>{
        if( theModal === id){
            setTheModal(null)
        }else{
            setTheModal(id)
        }
    }
  return (
    <div id='feed'>
   {posts.slice().sort((a, b) => b.timestamp - a.timestamp).map((post) => (
                    <div style={{width:"100%", height: "100%", borderBottom: "2px #F5F2F2 solid"}}>
                 <section id="profile-feed" key={post.id}>
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
                            <small>Made a post </small>

                            <p>this is a dummy text</p>

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
                                            <img style={{width:'209px', height:"259px"}} src={image} alt={`Image ${index + 1}`} />
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
                            />
                            <ToggleButton
                                title='share'
                                icon='fa-regular fa-paper-plane'
                                className={`btns`}
                            />
                        </div>

                        <div id="interaction-display">
                            <p>{totalLikes}Likes</p> &bull;
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
                
                
            ))}
            
    </div>
  )
}

export default ProfileFeed
