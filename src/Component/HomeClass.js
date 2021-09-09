import { Component } from 'react';
import { Link } from 'react-router-dom';
import menuList from '../Data/menuList';

class HomeClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titlePage: 'WELCOME TO REACT',
            subTitle: 'A JavaScript library for building user interfaces',
            descriptionData: menuList,
        };
    }

    render() {
        console.log(this.props);
        return (
            <div className='container-fluid vh-100 bg-light'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h1 className={this.state.titleClassName}>
                            {this.state.titlePage}
                        </h1>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h2 className='title'>{this.state.subTitle}</h2>
                    </div>
                </div>
                <div className='row justify-content-around'>
                    {this.state.descriptionData.map((item) => (
                        <div
                            key={item.id}
                            className='col-8 shadow-sm p-3 m-4 bg-white rounded text-center'
                        >
                            <Link to={'/detail/' + item.id}>{item.title}</Link>
                        </div>
                    ))}
                </div>
                <Link to='/other/1'>ke page other 1</Link>
                <Link to='/other/2'>ke page other 2</Link>
                <Link to='/other/3'>ke page other 3</Link>
            </div>
        );
    }
}

export default HomeClass;
