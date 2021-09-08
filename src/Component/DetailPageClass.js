import { Component } from 'react';
import { Redirect } from 'react-router-dom';
import menuList from '../Data/menuList';

class DetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            descriptionData: menuList,
            showData: { title: '', description: '', showOtherButton: false },
            isRedirect: false,
        };
    }

    componentDidMount() {
        const findData = this.state.descriptionData.find(
            (item) => item.id == this.props.match.params.id
        );
        if (findData) {
            this.setState({ showData: findData });
        } else {
            this.props.history.push('/');
            // this.setState({ isRedirect: true });
        }
    }

    render() {
        console.log(this.props);
        return this.state.isRedirect ? (
            <Redirect to='/' />
        ) : (
            <div className='container-fluid bg-light vh-100'>
                <div className='row justify-content-around'>
                    <div className='col-11 shadow-sm p-3 my-5 bg-white rounded text-center'>
                        <h1>{this.state.showData.title}</h1>
                        <p>{this.state.showData.description}</p>
                        <button className='btn btn-primary'>BUTTON</button>
                        {this.state.showData.showOtherButton ? (
                            <button className='btn btn-danger ml-2'>
                                OTHER BUTTON
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPage;
