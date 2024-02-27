import React, { useState } from 'react';
import { getAllPosts } from '../adapters/post-adapter';
import { getAllUsers } from '../adapters/user-adapter';
import DisplayPosts from '../components/ForumComponents/DisplayPosts';
import PostForm from '../components/ForumComponents/PostForm';
import '../ForumPage.css';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';

export default function ForumPage() {
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [open, setOpen] = useState(false);

    const displayPostFunction = () => {
        getAllPosts().then((posts) => {
            setPosts(posts);
            const userIds = Array.from(new Set(posts.map((post) => post.user_id)));
            return getAllUsers(userIds);
        }).then(setUsers);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
                <Button
                    variant="outlined"
                    onClick={handleClickOpen}
                    sx={{
                        ':hover': {
                            bgcolor: 'purple', 
                            color: 'white', 
                        },
                    }}
                >
                    Create Post
                </Button>
            </div>
            <Dialog
                maxWidth="md"
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                PaperProps={{
                    style: {
                        minWidth: '600px',
                        maxWidth: '80%',
                    },
                }}
            >
                <DialogTitle id="form-dialog-title">Post Form</DialogTitle>
                <DialogContent>
                    <PostForm fetchPosts={displayPostFunction} onClose={handleClose} onSubmitSuccess={handleClose} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
            <DisplayPosts fetchPosts={displayPostFunction} posts={posts} users={users}/>
        </>
    );
}
