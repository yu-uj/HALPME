import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Form } from 'react-bootstrap'
import { createComment } from '../../apis/post';
import '../../assets/styles/post/CommentCreate.css'

function CommentCreate({ postId }) {
  // data
  let [content, setContent] = useState("")
  let account = useSelector((state) => state.account)
  // functions
  let onChangeComment = (e) => {
    setContent(e.target.value)
  }
  let postComment = () => {
    createComment(account.id, content, postId )
      .then((res) => {
        console.log(res)
        window.location.reload()
      })
  }
  // views
  return (
    <div className="CommentCreate">
      <div className="comment-create-wrapper">
        <div className="comment-create-writer">✏️ { account.nickname }</div>
        <Form>
            <Form.Control id="comment-create-content-intput" as="textarea" aria-label="With textarea" placeholder="댓글 내용을 입력하세요" onChange={onChangeComment} />
            <button className="btn" id="main-btn-lg" type="button" onClick={postComment}>작성하기</button>
        </Form>
      </div>
      <div className="comment-space"></div>
    </div>
  );
}
  
export default CommentCreate;