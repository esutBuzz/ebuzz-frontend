import { useState } from 'react'
import { Swiper, SwiperSlide} from 'swiper/react'
import { Pagination, Navigation, Keyboard } from 'swiper/modules'
import avatar from '/images/avatar.jpg'
import PostContent from './PostContent/PostContent'
import ToggleButton from '../ToggleButton/ToggleButton'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import './Feed.scss'


export default function Feed({className}) {
    //here is where the querry handling would be done
    const [posts, setPosts] = useState([])
    const addNewPost = (newPost) => {
        setPosts([newPost, ...posts])
    }
  return (
    // Contains what would be displayed in the feed

    <main id="feed" className={className}>
        {/* when updated, the content would be read from the user's login details */}
        <PostContent addNewPost={addNewPost}/>

        {/* content here would be mapped from a database, and also be updated by 2 seconds according to the latest. with option to refresh */}
        
        {posts.map((posts) => (
            <section id="current-feed">
            <nav>
                    <img src={avatar} alt="username" title='username' id='user' />
                    <h3>ObiWan Kenobi <small>@jediobiwan</small></h3>

                    <ToggleButton
                        icon={'fa-solid fa-bars-staggered'}
                        className={'icon'}
                    />
            </nav>

                    <div id="feed-container">
                            <div id="feed-display">
                                <p>{posts.text}</p>

                                {posts.images.length > 0 &&(
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
                                        {posts.images.map((image, index) => (
                                            <SwiperSlide key={index} className='slides'>
                                                <img src={image} alt={`Image ${index + 1}`} />
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                )}
                            </div>
                            <div id='interactions'>
                                {icons.map((items, index) => (
                                    <ToggleButton
                                        key={index}
                                        icon={items.icon}
                                        className={`btns`}
                                        title={items.title}
                                    />
                                ))}
                            </div>
                            <div id="interaction-display">
                                <p>{posts.likes.length}Likes</p> &bull;
                                <p>{posts.comments.length}Comments</p>
                            </div>
                    </div>
            </section>
        ))}
    </main>
  )
}

const icons = [
    {
        title: "Like",
        icon: "fa-regular fa-heart"
    },

    {
        title: "Comment",
        icon: "fa-regular fa-comment"
    },

    {
        title: "Share",
        icon: "fa-regular fa-paper-plane"
    }
]