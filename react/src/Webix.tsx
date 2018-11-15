// example of custom component with Webix UI inside
// this one is a static view, not linked to the React data store

import React, {Component} from 'react';
import ReactDOM from 'react-dom';

/* tslint:disable */

declare var webix: any;

class Webix extends Component<any> {
    private ui: any;
    private select: any;

  render() {
    return (
      <div ref="root"/>
    );
  }

  setWebixData(data:any){
    const ui = this.ui;
    if (ui.setValues) {
      ui.setValues(data);
    }
    else if (ui.parse) {
        ui.clearAll()
      ui.parse(data)
         }
    else if (ui.setValue) {
      ui.setValue(data);
         } 
  }

  componentWillUnmount(){
    this.ui.destructor();
    this.ui = null;
  }

  componentWillUpdate(props:any){
    if (props.data) {
      this.setWebixData(props.data);
    }
    if (props.ui && this.ui.refreshColumns) {
        this.ui.refreshColumns(props.ui.columns);
    }
    if (props.select) {
      this.select(props.select);
    }
  }

  componentDidMount(){
  	this.ui = webix.ui(
  	  this.props.ui, 
  	  ReactDOM.findDOMNode(this.refs.root)
	  );

    this.componentWillUpdate(this.props);
  }
  
}

export default Webix;
