import React, {Component} from 'react';
import styles from './TimeLine.css';

import Point from './Point.jsx';
import Line from './Line.jsx';
import ItemHead from './ItemHead.jsx';
import ItemEnd from './ItemEnd.jsx';
import ItemA from './Item.jsx';

class TimeLine extends Component{

	static Item = class Temp extends Component{
		render(){
			return null;
		}

	};
	//I know velocity of points and lines
	static defaultProps = {
		

	}

	constructor(props){
		super(props);
		this.state = {
			itemDelays:{}
		}
	}


	showNext(idx,duration){
		
		
		this.state.itemDelays[idx] = duration;
		console.log(this.state.itemDelays);
	}

	componentDidMount(){
		
	

	}

	render(){


		let children = this.props.children;
		let middleItems = [];
		if(children){
			middleItems = children.map((item,idx)=>{
				let index = idx - 1;
				if(idx == 0){
					index = 'head';
				}
				return(
					<ItemA key={item.key} idx={idx} showNext={this.showNext.bind(this)} delay={this.state.itemDelays[index]}>
						{item.props.children}
					</ItemA>
					)
		 });
		}



		return(
		



		<section>
			<div className={styles.container} >
				<ItemHead key={'item-first'} />				
				{middleItems}		
				<ItemEnd key={'item-last'} last={true} />

			</div>


		</section>
			


			)
	}
}

module.exports = TimeLine;