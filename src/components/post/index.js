import React, { Fragment } from 'react';

const Post = ({ body }) => {
    return (
        <Fragment>
            {body.map(post => {
                const { _id, title, content } = post;
                return (
                    <div key={_id}>
                        <h1>{title}</h1>
                        <p>{content}</p>
                        <br />
                        <hr />
                    </div>
                );
            })}
        </Fragment>
    );
}

export default Post;