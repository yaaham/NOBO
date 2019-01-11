import React , { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import Poster from './Poster';
import MovieInfo from './MovieInfo'
import Helper from '../helper';
import NavBar from './NavBar';
import Footer from './Footer'; 
const styles = {
    marginTop: '20vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
};
class MovieDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages :[]
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
        console.log(this.state.messages);
        let movie = this.state.messages.map((message)=>{
            if(message.show.id == this.props.match.params.id){
                var img
                if(message.show.image!== null){
                    img=message.show.image.medium;
                }
                return(
                  <Grid fluid={false}>
                    <Row>
                      <Col xs={12} sm={6} md={4}>
                        <Poster id={message.show.id} path={message.show.image} responsive />
                      </Col>
                      <Col xs={12} sm={6} md={8}>
                        <MovieInfo movie={message.show}/>
                      </Col>
                    </Row>
                  </Grid>
                );
            }
        });

        return (
            <div>
                <NavBar />
                <div style ={styles}>
                {movie}
                </div>
                <Footer />
            </div>
        );
        
    }
  }
  export default MovieDetail;
