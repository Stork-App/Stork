import CommentForm from "../components/PostComponents/CommentForm";
import DisplayPost from "../components/PostComponents/DisplayPost";
import DisplayThreads from "../components/PostComponents/DisplayThreads";

export default function PostPage() {
  
    return <>
       <DisplayPost/>  
       <DisplayThreads/>
       <CommentForm/>
    </>
}