import React from 'react';
import { withRouter} from 'react-router-dom'
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import loadable from '@loadable/component'
import {
    
} from 'store/actions/auth';

const Records = loadable(() => import('./records'))
const MainAwards = loadable(() => import('./main_awards'))
const LearningProcess = loadable(() => import('./learning_process'))
const Profile = loadable(() => import('./profile'))
const Settings = loadable(() => import('./settings'))
const Page404 = loadable(() => import('./page404'))




class Routes extends React.Component {

    render() {

        return (
            <Switch>
                <Route exact path='/' component={Records}/>
                <Route exact path='/main-awards' component={MainAwards}/>
                <Route exact path='/learning-process' component={LearningProcess}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/settings' component={Settings}/>


                <Route component={Page404}/>
            </Switch>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, {
    
})(Routes));