import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Description.module.css";

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Size: this.props.item.Size,
      Capacity: this.props.item.Capacity,
      Color: this.props.item.Color,
      "Touch ID in keyboard": this.props.item["Touch ID in keyboard"],
      "With USB 3 ports": this.props.item["With USB 3 ports"],
    };
  }

  render() {
    const { brand, name, prices, attributes } = this.props.product;
    const { currency } = this.props;
    console.log("desc", prices);
    return (
      <main>
        <h4>{brand}</h4>
        <h4>{name}</h4>
        <div className={styles.prices}>
          <div>{prices[currency].currency.symbol}</div>
          <div>{prices[currency].amount}</div>
        </div>
        <div>
          {attributes.map((attribute) => (
            <div key={attribute.id}>
              <h4>{attribute.name}</h4>
              <div className={styles.variants}>
                {attribute.items.map((item) => (
                  <label key={item.value} name={attribute.name}>
                    {item.value === this.state[attribute.name] ? (
                      <>
                        <input
                          type="radio"
                          name={attribute.name}
                          defaultChecked
                          disabled
                        />
                        {attribute.name === "Color" ? (
                          <div
                            key={item.id}
                            className={styles.check_color}
                            style={{
                              background: `${item.value}`,
                            }}
                          ></div>
                        ) : (
                          <div key={item.id} className={styles.select}>
                            {item.value}
                          </div>
                        )}
                      </>
                    ) : (
                      <>
                        <input type="radio" name={attribute.name} disabled />
                        {attribute.name === "Color" ? (
                          <div
                            key={item.id}
                            className={styles.check_color}
                            style={{
                              background: `${item.value}`,
                            }}
                          ></div>
                        ) : (
                          <div key={item.id} className={styles.select}>
                            {item.value}
                          </div>
                        )}
                      </>
                    )}
                  </label>
                ))}
              </div>
              <div className={styles.variants}></div>
            </div>
          ))}
        </div>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    currency: state.currency.currencyIndex,
  };
}

export default connect(mapStateToProps)(Description);
