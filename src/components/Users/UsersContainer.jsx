import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setPageContent, toggleIsFetching } from '../../redux/page-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
// import Preloader from '../../Common/Preloader/LoaderCss';

class UsersContainer extends React.Component {

    componentDidMount() {


        const instance = axios.create({
            withCredentials: true,
            baseURL: 'https://en.wikipedia.org/w/api.php?',
            crossdomain: true,
            credentials: 'same-origin',
            mode: 'same-origin',
            headers: {
                'Access-Control-Allow-Headers' : '*',
                'Content-Type': 'application/json'
            }
        })

        const queryURL =  `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=egg&format=json`;
        function getWiki() {
                return instance.get(`action=parse&page=Pet_door&prop=text&formatversion=2`)
                .then(response => { console.log(response);})
            }
        
        getWiki();
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                pageContent={this.props.pageContent}
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        pageContent: state.pageReducer.pageContent,
        currentPage: state.pageReducer.currentPage,
        isFetching: state.pageReducer.isFetching
    }
}

const mapDispatchToProps = (dispatch) => {
    return
}

export default connect(mapStateToProps,
    {
        setCurrentPage,
        setPageContent,
        toggleIsFetching
    })(UsersContainer);