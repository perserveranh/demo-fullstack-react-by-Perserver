import React, { Fragment } from 'react';
import { Alert } from 'reactstrap';
import { Post } from '../../components';
import { api } from '../../api';
import axios from 'axios';

class CallApi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            users: [],
            posts: [],
            error: null,

        }
    }
    componentDidMount() {
        // fetch
        // this.fetchUsers();
        // this.fetchPosts();

        // axios
        this.getUsers();
        this.getPosts();
    }


    // fetch
    // fetchUsers() {
    //     // Where we're fetching data from
    //     fetch(`https://jsonplaceholder.typicode.com/users?=1`)
    //         // We get the API response and receive data in JSON format...
    //         .then(response => response.json())
    //         // ...then we update the users state
    //         .then(data =>
    //             this.setState({
    //                 users: data,
    //                 isLoading: false,
    //             })
    //         )
    //         // Catch any errors we hit and update the app
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }
    // fetchPosts() {
    //     fetch(`https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/posts.json`)
    //         .then(response => response.json())
    //         .then(data =>
    //             this.setState({
    //                 posts: data,
    //                 isLoading: false
    //             })
    //         )
    //         .catch(error => this.setState({
    //             error: error,
    //             isLoading: false
    //         }))
    // }

    // axios
    getUsers() {
        axios.get("https://randomuser.me/api/?results=5")
            .then(response =>
                response.data.results.map(user => ({
                    name: `${user.name.first} ${user.name.last}`,
                    username: `${user.login.username}`,
                    email: `${user.email}`,
                    image: `${user.picture.thumbnail}`
                }))
            )
            .then(users => {
                this.setState({
                    users,
                    isLoading: false
                });
            })
            .catch(error => this.setState({
                error,
                isLoading: false
            }))
    }

    async getPosts() {
        const response = await api.get();
        try {
            this.setState({
                posts: response.data.posts,
                isLoading: false
            });
        } catch (error) {
            this.setState({ error, isLoading: false })
        }

    }
    render() {

        const { isLoading, users, error, posts } = this.state;
        return (
            <Fragment>
                <div>
                    <h1 className="text-center">Random User</h1>

                    {/* {error ? <p className="text-center">{error.message}</p> : null} */}

                    {/* {!isLoading ? (
                        users.map(user => {
                            const { username, name, email, image } = users;
                            return (
                                <div key={username}>
                                    <p><b>Name : {name}</b></p>
                                    <p>Email : {email}</p>
                                    <div>
                                        <img src={image} alt="image" />
                                    </div>
                                    <hr />
                                </div>
                            )
                        })
                    ) : (
                            <Alert color="primary" className="text-center">
                                Loading ...
      </Alert>
                        )} */}
                    <div>
                        {!isLoading ? (
                            users.map(user => {
                                const { username, name, email, image } = user;
                                return (
                                    <div key={username}>
                                        <p>{name}</p>
                                        <div>
                                            <img src={image} alt={name} />
                                        </div>
                                        <p>{email}</p>
                                        <hr />
                                    </div>
                                );
                            })
                        ) : (
                                <p>Loading...</p>
                            )}
                    </div>
                </div>
                <br />
                <br />
                <hr />
                {/* <div>
                    <h1 className="text-center">Fetch - Blog</h1>

                    {!isLoading ? (
                        Object.keys(posts).map(key =>
                            <Post key={key} body={posts[key]} />
                        )
                    ) : (
                            <Alert color="primary" className="text-center">
                                Loading ...
      </Alert>
                        )}
                </div>  */}
                <h1 className="text-center">Random - Posts</h1>
                <div>
                    {!isLoading ? (
                        posts.map(post => {
                            const { _id, title, content } = post;
                            return (
                                <div key={_id}>
                                    <h2>{title}</h2>
                                    <p>{content}</p>
                                    <hr />
                                </div>
                            );
                        })
                    ) : (
                            <Alert color="primary" className="text-center">
                                Loading ...
      </Alert>)}
                </div>


            </Fragment>
        );
    }
}

export default CallApi;