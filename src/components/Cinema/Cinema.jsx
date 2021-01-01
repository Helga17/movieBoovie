import React from 'react';
import classes from './Cinema.module.css';

const Cinema = () => {
    return (
        <div>
            <div class={classes.title}>
                <h3>Незабаром у кіно</h3>
            </div>

            <div class={classes.cinema}>
                    <div class={classes.item}>
                    <video width="380" height="250" controls >
                        <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                    </video>
                        <div class="trend_text">
                            Тенет
                        </div>
                    </div>

                    <div class={classes.item}>
                    <video width="380" height="250" controls >
                        <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                    </video>
                       <div class="trend_text">
                            Веном
                        </div>
                    </div>

                    <div class={classes.item}>
                    <video width="380" height="250" controls >
                        <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                    </video>
                       <div class="trend_text">
                            Веном
                        </div>
                    </div>
                </div>

        </div>
    );
}

export default Cinema;