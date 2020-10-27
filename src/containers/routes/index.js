import React from 'react';
import { withRouter} from 'react-router-dom'
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import loadable from '@loadable/component'
import {
    
} from 'store/actions/auth';

const Records = loadable(() => import('./records'))
const LearningProcess = loadable(() => import('./learning_process'))
const MainRecords = loadable(() => import('./main_records'))
const MainAwards = loadable(() => import('./main_awards'))
const Profile = loadable(() => import('./profile'))
const MainRank = loadable(() => import('./main_ranks'))
const Settings = loadable(() => import('./settings'))
const TournamentResult = loadable(() => import('./tournament_results'))
const Page404 = loadable(() => import('./page404'))




class Routes extends React.Component {

    render() {

        return (
            <Switch>
                <Route exact path='/' component={Records}/>
                <Route exact path='/learning-process' component={LearningProcess}/>
                <Route exact path='/main-records' component={MainRecords}/>
                <Route exact path='/main-awards' component={MainAwards}/>
                <Route exact path='/profile' component={Profile}/>
                <Route exact path='/main-rank' component={MainRank}/>
                <Route exact path='/settings' component={Settings}/>
                <Route exact path='/tournament-result' component={TournamentResult}/>


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