import React from 'react';
import { withRouter} from 'react-router-dom'
import { Route, Switch} from 'react-router-dom';
import {connect} from 'react-redux';
import loadable from '@loadable/component'
import {
    
} from 'store/actions/auth';

const Records = loadable(() => import('./records'))
const Page404 = loadable(() => import('./page404'))


class Routes extends React.Component {

    render() {

        return (
            <Switch>
                <Route exact path='/' component={Records}/>
                <Route path='/404' component={Page404}/>
            </Switch>
        );
    }
}


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default withRouter(connect(mapStateToProps, {
    
})(Routes));