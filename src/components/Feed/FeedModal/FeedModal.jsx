import React ,{useContext, useState}from 'react';
import notInsteresed from "/images/notInterested.svg";
import addRemove from "/images/addRemoveList.svg";
import unFollow from "/images/unfollow.svg";
import mute from "/images/muteAccount.svg";
import Block from "/images/blockAccount.svg";
import AddCom from "/images/addCommunity.svg";
import Repost from "/images/reportPost.svg";
import Modal from '../../../UI/Modal';
import './FeedModal.scss';
import { UserContext } from '../../../Context/Context';

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
    {   id:3,
        info:"Unfollow this account",
        image :unFollow,
    },
    {   id:4,
        info:"Mute this account",
        image:mute,
    },
    {   id:5,
        info:"Block this account",
        image : Block,
    },
    {   id:6,
        info:"Add to community",
        image: AddCom,
    },
    {   id:7,
        info : "Report this post",
         image : Repost                                                                                                                                                       
    }
]

function FeedModal({theModal}) {
  

    

     const displayFeedModal =  listItems.map((item)=>{
        return(
            <div id="feedModal" key={item.id} >
                 <p id="feedModalText">{item.info}</p>
                 <img src={item.image} alt={item.info} />
            </div>
        )
     })

  return (
       <>
        {
              ( <Modal>  {displayFeedModal} </Modal>   ) 
               
        }

       </>
  )
}

export default FeedModal
