import React from 'react'
import { connect } from 'react-redux'
import { createPost } from '../redux/actions'

class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: ''
        }
    }

    submitHandler = event => {
        event.preventDefault()

        const { title } = this.state

        if (!title.trim()) {
            return
        } // vor datarak vaxt enter taluc chgrvi inputy

        const newPost = {
            title, id: Date.now().toString()
        }
        // console.log(newPost)
        this.props.createPost(newPost)
        this.setState({ title: "" })
    }

    changeInputHandler = event => {
        event.persist()
        this.setState(prev => ({
            ...prev, ...{
                [event.target.name]: event.target.value
            }
        }))
    }

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
                    <label htmlFor="title">Title of the post</label>
                    <input
                        type="text"
                        className='form-control'
                        id="title"
                        value={this.state.title}
                        name="title"
                        onChange={this.changeInputHandler}
                    />
                </div>
                <br />
                <button type='submit' className='btn btn-success'>Create</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost: createPost // kam ete nuynna karelia uxxaki datark toxel aranc :
}

export default connect(null, mapDispatchToProps)(PostForm)