import { useContext, useEffect, useState } from "react";

export default function CommentForm() {
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const obj = Object.fromEntries(formData);
//     obj.mood = Number(obj.mood);
//     obj.abd_pain = setRangeValues(obj.abd_pain);
//     obj.back_pain = setRangeValues(obj.back_pain);
//     obj.nausea = setRangeValues(obj.nausea);
//     obj.fatigue = setRangeValues(obj.fatigue);
//     obj.user_id = Number(obj.user_id);
//     console.log(obj);
//     await createLog(obj);

//     event.target.reset();
//   };

  return (
    <>
      <form onSubmit={handleSubmit} aria-labelledby="input-text">
        <label htmlFor="text">Comment:</label>
        <input type="text" autoComplete="text" id="text" name="text" />
        <button>post</button>
      </form>
    </>
  );
}

// import { useNavigate } from "react-router-dom";
// import { updateUsername } from "../adapters/user-adapter";

// export default function UpdateUsernameForm({ currentUser, setCurrentUser }) {
//   const navigate = useNavigate();
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const [user, error] = await updateUsername(Object.fromEntries(formData));
//     // If our user isn't who they say they are
//     // (an auth error on update) log them out
//     // We added the httpStatus as a custom cause in our error
//     if (error?.cause > 400 && error?.cause < 500) {
//       setCurrentUser(null);
//       return navigate('/');
//     }

//     setCurrentUser(user);
//     event.target.reset();
//   };

//   return <form onSubmit={handleSubmit} aria-labelledby="update-heading">
//     <h2 id="update-heading">Update User User</h2>
//     <label htmlFor='username'>New Username</label>
//     <input type='text' id='username' name='username'/>
//     <input type="hidden" name="id" value={currentUser.id} />

//     <button>Update Username</button>
//   </form>;
// }