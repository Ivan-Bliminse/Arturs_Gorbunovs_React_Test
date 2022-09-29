import React, { Component } from "react";
import Attribute from "./Attribute";
import Price from "./Price";
import Title from "./Title";
import Counter from "./Counter";
import Image from "./Image";
import styles from "./Item.module.css";

export default class Item extends Component {
  render() {
    const { currencyIndex, options, amount, key_unique } = this.props;
    const { brand, name, gallery, prices, attributes } = this.props.item;

    if (!this.props.item) return null;

    return (
      <div className={styles.cart_item}>
        <section className={styles.cart_description}>
          <Title brand={brand} name={name} stl={"mini"} />
          <Price prices={prices} currencyIndex={currencyIndex} stl={"mini"} />
          <Attribute attributes={attributes} options={options} stl={"mini"} />
        </section>
        <section className={styles.count_image}>
          <Counter amount={amount} key_unique={key_unique} />
          <Image gallery={gallery} />
        </section>
      </div>
    );
  }
}