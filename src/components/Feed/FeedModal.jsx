import React ,{useContext, useState}from 'react';
import notInsteresed from "../../assets/notInterested.svg";
import addRemove from "../../assets/addRemoveList.svg";
import unFollow from "../../assets/unFollow.svg";
import mute from "../../assets/muteAccount.svg";
import Block from "../../assets/blockAccount.svg";
import AddCom from "../../assets/addCommunity.svg";
import Repost from "../../assets/reportPost.svg";
import Modal from '../../UI/Modal';
import './FeedModal.scss';
import { UserContext } from '../../Context/Context';

const listItems = [
    {
        info: "Not interested",
        image : notInsteresed,

    },
    {
        info: "Add/Remove from list",
        image : addRemove,
    },
    {
        info:"Unfollow this account",
        image :unFollow,
    },
    {
        info:"Mute this account",
        image:mute,
    },
    {
        info:"Block this account",
        image : Block,
    },
    {
        info:"Add to community",
        image: AddCom,
    },
    {
        info : "Report this post",
         image : Repost                                                                                                                                                       
    }
]

function FeedModal({theModal}) {
  

    

     const displayFeedModal =  listItems.map((item)=>{
        return(
            <div id="feedModal"  >
                 <p id="feedModalText">{item.info}</p>
                 <img src={item.image} alt={item.info} />
            </div>
        )
     })

  return (
       <>
        {
             theModal && ( <Modal>  {displayFeedModal} </Modal>   ) 
               
        }

       </>
  )
}

export default FeedModal
