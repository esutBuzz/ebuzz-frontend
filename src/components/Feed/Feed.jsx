import avatar from '/images/avatar.jpg'
import img from '/icons/img.svg'
import gif from '/icons/gif.svg'
import pen from '/icons/pen.svg'
import './Feed.scss'
import { useState } from 'react'
import ToggleButton from '../ToggleButton/ToggleButton'

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

const items = [
    {
        id: 1,
        type: 'image',
        image: img,
        title: "Upload images",
        accept: ".png, .jpg, .jpeg"
    },
    {
        id: 2,
        type: 'gif',
        image: gif,
        title: "Upload gifs",
        accept: ".gif"
    },
    {
        id: 3,
        type: 'text',
        image: pen,
        title: "Upload text",
        accept: ".txt, .pdf, .doc, .docx"
    }
]

// the post button here would update the post to the database and be rendered in the feed

function PostContent(){
    const [text, setText] = useState('')
    const [imageCounter, setImageCounter] = useState(0)

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
    
        if (file && imageCounter < 4) {
          const imageUrl = URL.createObjectURL(file)
          setText((prevText) => prevText + `<img src="${imageUrl}" alt="Uploaded Image" />\n`)
          setImageCounter(imageCounter + 1)
    
          // Disable further image input if the limit is reached
          if (imageCounter + 1 >= 4) {
            e.target.disabled = true
          }
        }
    }

    const handleTextChange = (e) => {
        // Check if the text length exceeds the maximum allowed (500 characters)
        if (e.target.value.length <= 500) {
            setText(e.target.value)
        }
    }

    return(
        <section id='post-content'>
            <img src={avatar} id='avatar' alt="username" title='username' />
            <aside>
                <span id='edit-display'>
                    <textarea
                        name="text"
                        id="text"
                        placeholder='What is on your mind?'
                        value={text}
                        onChange={handleTextChange}
                        maxLength={500}
                    >
                        <div id="graphic-display"></div>
                    </textarea>
                </span>
                <menu>
                    <div id="graphic-upload">
                        {items.map(item => (
                            <span id='upload' key={item.id}>
                                <input
                                    type='file'
                                    name="image"
                                    id={item.id}
                                    accept={item.accept}
                                    onChange={handleImageUpload}
                                    />
                                <label htmlFor={item.id}>
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            title={item.title}
                                            />
                                </label>
                            </span>
                        ))}
                    </div>

                <ToggleButton
                    text={'Post'}
                    className={'post-btn'}
                />
                </menu>
            </aside>
        </section>
    )
}