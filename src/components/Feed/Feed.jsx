import PostContent from './PostContent/PostContent'
import './Feed.scss'


export default function Feed({className}) {
    //here is where the querry handling would be done
    
  return (
    // Contains what would be displayed in the feed

    <main id="feed" className={className}>
        {/* when updated, the content would be read from the user's login details */}
        <PostContent />

        {/* content here would be mapped from a database, and also be updated by 2 seconds according to the latest. with option to refresh */}
        <section id="current-feed">
            something
        </section>
    </main>
  )
}

