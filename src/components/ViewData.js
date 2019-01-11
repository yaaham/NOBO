import React, { Component } from 'react';
import Helper from '../helper';
import { Grid, Row, Col,Button} from 'react-bootstrap';
import Poster from './Poster';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer'; 
const styles = {
        marginTop: '20vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
};
class ViewData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.helper = new Helper();
    }
    componentDidMount() {
        this.helper
            .GetData()
            .then(res => {
                this.setState({ messages: res });
            })
    }
    render() {
        const style={
            display: 'flex',
            flexWrap: 'wrap'
          }
          let video = this.state.messages.map(message => {
              
              //console.log(message.show._links.self.href);
            return (
            <Col xs={6} sm={4} md={3} key={message.show.id}>
            <Link to={'/movie/'+message.show.id}  >
            <Poster info id={message.show.id} path={message.show.image} title={message.show.name} voteAverage={message.show.rating.average} release_date={message.show.premiered} responsive />
            </Link>
            </Col>)
          });
        return (
        <div>
        <NavBar/>
        <div style={styles}>
        <Grid fluid={false}>
            <Row style={style}>
                {video}
            </Row>  
        </Grid>
        </div>
        <Footer />
        </div>
        );
    }
}

export default ViewData;


