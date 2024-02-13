const updatePost = async (req, res) => {
  const {
    db: { Post },
    params: { id },
    body: { title, description },
  } = req;

  const updatedPost = await Post.update(title, description, id);
  res.json(updatedPost);
};
module.exports = updatePost;
