import React, { Component } from 'react';
import styles from './UserItem.module.sass';
import buttonImage from '../../assets/icons/menu.png';
class UserItem extends Component{


    render() {
        return (

            <div className={styles["UserItem-container"]}>
                <div className={styles["UserItem-avatar-container"]}>
                    <div src={this.props.imageSrc} alt="user_image"/>
                </div>
                <div className={styles["UseItem-content-container"]}>
                    <div className={styles["UserItem-fullName"]}>{this.props.firstName+' '+this.props.lastName}</div>
                    <div>{this.props.post}</div>
                </div>
                <div className={styles["UserItem-control-container"]}>
                    <img src={buttonImage}/>
                </div>
            </div>

        );
    }

}


export default UserItem;

