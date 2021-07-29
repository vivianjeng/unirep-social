import React from 'react';
import PostBlock from './postBlock';
import { Post } from '../constants';

type Props = {
    posts: Post[],
}

const PostsList = ({ posts }: Props) => {
    const sortedPosts = posts.sort((a, b) => a.post_time > b.post_time? -1 : 1); // newest show upper

    return (
        <div className="post-list">
            {sortedPosts.length > 0? (
                sortedPosts.map((post) => (
                    <PostBlock key={post.id} post={post} />
                ))
            ) : <p>No posts are available.</p>}
        </div>
    );
}

export default PostsList;