import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPage, setPageContent, toggleIsFetching } from '../../redux/page-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../Common/Preloader/Preloader';
// import Preloader from '../../Common/Preloader/LoaderCss';

class UsersContainer extends React.Component {

    componentDidMount() {
        // this.props.toggleIsFetching(true);
        const queryURL =  `https://en.wikipedia.org/w/api.php?action=query&prop=revisions&rvprop=content&rvsection=0&titles=egg&format=json`;
        // const queryURL = `https://jsonplaceholder.typicode.com/todos/1`;
        // fetch(queryURL)
        // .then(res => res.json()).then(json => console.log(json))
        axios
        .get(queryURL, {
            withCredentials: true
        })
        .then(response => {
            debugger
            console.log(response);
            });
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