import React from 'react';
import { useEffect } from 'react';
import * as actions from '../js/redux/actions';
import { connect } from 'react-redux';
import { Col, Row, Container, Button } from 'react-bootstrap';
import BuyGroup from '../components/BuyGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/GamePage.scss';
 
import PicSwiper from '../components/PicSwiper';

const $ = require('jquery');

function GamePage(props) {

    useEffect(() => {
        // $.ajax({
        //     type: "POST",
        //     url: "/api/games",
        //     data: { id: props.gameId },
        //     success: (response) => { 
        //         console.log(response);
        //         props.loadGame(response[0]); //SELECT * FROM table WHERE   returns an array
        //     },
        //     dataType: "json"
        // })
        $.when(
            $.ajax({
                type: "POST",
                url: "/api/games",
                data: { id: props.gameId },
                success: response => {
                    console.log(response);
                    props.loadGame(response[0]); //SELECT * FROM table WHERE   returns an array                    
                }    
            }),
            $.ajax({
                type: "POST",
                url: "/api/games/pics",
                data: { id: props.gameId },
                success: response => {
                    console.log(response);
                    props.loadPics(response[0]);                    
                }
            })
        );        
    }, []);

    return (

        props.clickedGame !== null ?
            <Container className="game-page-container">
                <Row>
                    <h3 className="col-12" 
                        id="game-page-title"
                    >
                        { props.clickedGame.title }
                    </h3>
                </Row>
                <Row>
                    <Col sm="12" md="8">
{/*                         <img //className="col"//"col-sm-12 col-md-8"
                            id="game-page-pic"
                            //src={ props.clickedGame.header_image }
                            src={ props.pics.pic_1 }
                            alt="n/a"
                        /> */}

                        <PicSwiper 
                            pics={[
                                props.pics.pic_1,
                                props.pics.pic_2,
                                props.pics.pic_3
                            ]} 
                        />

                    </Col>
                    <Col sm="12" md="4">
                        <Row>
                            <Col>
                                <BuyGroup //className="col"//"col-md-4"//"col-12 col-md-4"
                                    id="game-page-price-group"
                                    game={ props.clickedGame }
                                    isOnGamePage={ true }
                                />
                                <h6>
                                    Developer: { props.clickedGame.developer }
                                </h6>
                                <h6>
                                    Publisher: { props.clickedGame.publisher }
                                </h6>
                            </Col>

                            <Col>
                                <input type="button" value="Buy"/>
                                <h6>
                                    Release date: { props.clickedGame.release }
                                </h6>
                                <h6>
                                    Genre: { props.clickedGame.genre }
                                </h6>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <p>
                                    { props.clickedGame.description }
                                </p>
                            </Col>
                        </Row>
                    </Col> 
                </Row>
                <Row>

                </Row>
            </Container>
        :
            <div></div>
    )
}

const mapStateToProps = (state) => {
    return{
        clickedGame: state.databaseReducer.clickedGame,
        pics: state.databaseReducer.pics
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        loadGame: (game) => {
            dispatch(actions.gameLoaded(game))
        },
        loadPics: (pics) => {
            dispatch(actions.picsLoaded(pics))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
