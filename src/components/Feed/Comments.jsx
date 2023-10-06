import styled from "styled-components";
import avatar from '/images/avatar.jpg';
import { colors, values } from "../../StyledComponents/Styles";
import { useContext, useState } from "react";
import { UserContext } from "../../Context/Context";
import ToggleButton from "../ToggleButton/ToggleButton";

const PostCommentDisplay = styled.section`
    position: relative;
    width: 100%;
    background: ${colors.white};
    display: flex;
    align-items: center;
    gap: 1em;

    textarea{
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

    .comment-btn{
        background: ${colors.brown};
        color: ${colors.white};

        &.disable{
            background: ${colors.brownAccent};
        }
    }
`

const CommentsDisplay = styled.section`
    position: relative;
    width: 100%;
    padding: 1em 0;
    background: ${colors.white};
    border-bottom-left-radius: ${values.smallRadius};
    border-bottom-right-radius: ${values.smallRadius};
    display: flex;
    flex-direction: column;
    gap: .2em;

    article{
        position:relative;
        display: flex;
        align-items: center;
        gap: 1em;
        background: ${colors.ltWhite};
        padding: 0.5em;
        border-radius: ${values.smallRadius};
    }

    img{
        position: relative;
        height: calc(${values.wkHeight} * 0.025);
        width: calc(${values.wkWidth} * 0.025);
        border-radius: ${values.radius};
    }

    p{
        color: ${colors.gray};
        width: 100%;
        text-align: left;
    }
`
export function PostComment({postId, closeComment}){
    const [comment, setComment] = useState('')
    const { addComment } = useContext(UserContext)
    const isCommentEmpty = comment.trim() === ''

    function handleCommentChange(e) {
        if (e.target.value.length <= 500) {
            setComment(e.target.value)
        }
    }

    function handleComment() {
        if (!isCommentEmpty) {
            addComment({
                postId,
                text: comment,
            });

            setComment("");
            closeComment();
        }
    }


    return(
        <PostCommentDisplay>
            <textarea 
                name="comment" 
                id="comment" 
                placeholder="Write a Comment!" 
                value={comment}
                onChange={handleCommentChange}
            ></textarea>
            <ToggleButton
                text='Comment'
                disabled={isCommentEmpty}
                onClick={handleComment}
                className='comment-btn'
            />
        </PostCommentDisplay>
    )
}

export function Comments({ post }) {
    const {comments} = useContext(UserContext)
    const postComments = comments.filter((comment) => comment.postId === post.id);

    return(
        <CommentsDisplay>
            {postComments.map((comment) => (
                <article key={comment.id}>  
                    <img src={avatar} alt="avatar" />
                    <p>{comment.text}</p>
                </article>
            ))}
        </CommentsDisplay>
    )
}