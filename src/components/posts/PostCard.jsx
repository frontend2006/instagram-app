import React from 'react';
import { Components } from '..';
import NoneAvatar from "../../assets/images/profile/NoneAvatar.jpg";
import NoneImage from "../../assets/images/post/empty.png";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi"
import { CiSaveDown2 } from "react-icons/ci"

import cls from "../../assets/styles/posts/Posts.module.scss";

function PostCard({base}) {
  const [avatar , setAvatar] = React.useState("");
  const [image , setImage] = React.useState("");

  React.useEffect(() => {
    if(!base?.avatar) {
      setAvatar(NoneAvatar)
    } else {
      setAvatar(base?.avatar)
    }

    if(base?.post?.post_images?.length === 0) {
      setImage(NoneImage)
    } else {
      setImage(base?.post?.post_images[0]?.image)
    }
  }, [base]);

  const renderLikes = () => 
    base?.post?.liked.length === 0
      ? 0
      : base?.post?.liked.length

  return (
    <div className={cls.post_card}>
      <div className={cls.post_card_head}>
        <div className={cls.post_card_head_inline}>
          <div>
            <Components.Image src={avatar}/>
          </div>
          <div>
            <h4>{base?.username}</h4>
          </div>
        </div>
      </div>
      <div className={cls.post_card_body}>
        <Components.Image src={image}/>
      </div>
      <div className={cls.post_card_foot}>
        <div className={cls.post_card_foot_inline}>
          <div>
            <AiOutlineHeart />
            <BiMessageRounded />
          </div>
          <div>
            <CiSaveDown2 />
          </div>
        </div>
        <div className={cls.post_card_foot_likes}>
          <p>{renderLikes()} отметок "Нравится"</p>
        </div>
        <div className={cls.post_card_foot_title}>
          <div>
            <h4>{base?.username}</h4> <p>{base?.post?.title}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostCard;