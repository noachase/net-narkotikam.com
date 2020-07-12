import React from "react";
import bookLecture from "./../../assets/images/slider/book-lecture.jpg";
import aboutUs from "./../../assets/images/slider/about-us.jpg";
import styles from './Slider.module.css';
import {Carousel} from "react-bootstrap";

export default class Slider extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className={styles.sliderItem} >

                    <img
                        className='d-block w-100'
                        src={bookLecture}
                        alt='book-a-lecture'
                    />
                    <Carousel.Caption>
                        <h3>Замовити лекцію</h3>
                        <p>Замовте лекцію зараз, це безкоштовно!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item className={styles.sliderItem}>

                    <img
                        className='d-block w-100'
                        src={aboutUs}
                        alt='about-us'
                    />
                    <Carousel.Caption>
                        <h3>Узнайте про нас больше!</h3>
                        <p>фывфвыфыв</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
