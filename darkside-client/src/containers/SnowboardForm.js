import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateSnowboardFormData } from '../actions/snowboardForm';
import { createSnowboard } from '../actions/snowboards';

class SnowboardForm extends Component {

    handleOnChange = event => {
      const { name, value } = event.target;
      const currentSnowboardFormData = Object.assign({}, this.props.snowboardFormData, {
        [name]: value
      })
      this.props.updateSnowboardFormData(currentSnowboardFormData)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.createSnowboard(this.props.snowboardFormData)
      }

      render() {
        const { name, price, img_url, length } = this.props.snowboardFormData;

        return (
            <div>
              Add A Snowboard To The Inventory
              <form onSubmit={this.handleOnSubmit}>
                <div>
                  <label htmlFor="name">Name:</label>
                  <input 
                    type="text"
                    onChange={this.handleOnChange}
                    name="name"
                    value={name}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price:</label>
                  <input 
                    type="number"
                    onChange={this.handleOnChange}
                    name="price"
                    value={price}
                  />
                </div>
                <div>
                  <label htmlFor="img_url">Image Url:</label>
                  <input 
                    type="text"
                    onChange={this.handleOnChange}
                    name="img_url"
                    value={img_url}
                  />
                </div>
                <div>
                  <label htmlFor="length">Length:</label>
                  <input 
                    type="number"
                    onChange={this.handleOnChange}
                    name="length"
                    value={length}
                  />
                </div>
      
                <button type="submit">Add Board</button>
              </form>
            </div>
          )
        }
      }
      
      const mapStateToProps = state => {
        return {
          snowboardFormData: state.snowboardFormData
        }
      }
      
      export default connect(mapStateToProps, { 
        updateSnowboardFormData,
        createSnowboard
      })(SnowboardForm);  