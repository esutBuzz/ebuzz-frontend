import ToggleButton from '../../ToggleButton/ToggleButton';
import notInsteresed from "/images/notInterested.svg";
import addRemove from "/images/addRemoveList.svg";
import unFollow from "/images/unfollow.svg";
import mute from "/images/muteAccount.svg";
import Block from "/images/blockAccount.svg";
import AddCom from "/images/addCommunity.svg";
import Repost from "/images/reportPost.svg";
import './FeedModal.scss';


const listItems = [
    {
        id:1,
        info: "Not interested",
        image : notInsteresed,
    },
    {
        id:2,
        info: "Add/Remove from list",
        image : addRemove,
    },
    {   
        id:3,
        info:"Unfollow this account",
        image :unFollow,
    },
    {   
        id:4,
        info:"Mute this account",
        image:mute,
    },
    {   
        id:5,
        info:"Block this account",
        image : Block,
    },
    {   
        id:6,
        info:"Add to community",
        image: AddCom,
    },
    {  
        id:7,
        info : "Report this post",
        image : Repost
    }
]

function FeedModal({theModal}) {
    const displayFeedModal =  listItems.map((item)=>{
        return(
            
            <div id="feedModal" key={item.id} >
                <ToggleButton
                    type={'button'}
                    text={item.info}
                    title={item.info}
                    image={item.image}
                    className={'feed-modal'}
                />
            </div>

        )
    })

    return (
        <>
            <div id='modal'>
                {displayFeedModal} 
            </div>
        </>
    )
}

export default FeedModal