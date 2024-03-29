import React from 'react';

import {List, Avatar, Tag} from 'antd';

import { Link } from 'react-router-dom';

import TagSelection from "../containers/TagSelection";


// const IconText = ({ type, text }) => (
// 	<span>
// 		<Icon type={type} style={{ marginRight: 8 }} />
// 		{text}
// 	</span>
// );


const renderTags = (item) => {
	if ((item.tags !== null) && (item.tags !== undefined) && (item.tags.length !== 0)) {
		return (
			<List 
				style={{marginLeft: "40px", width: "100%"}}
				size="large"
				dataSource={item.tags}
				// footer={<div><b>ant design</b> footer part</div>}
				renderItem={item => (
					<Tag key={item.id} color={TagSelection.getColorPreset(item.color)}>
						{item.name} ({item.times_used})
					</Tag>
				)}
			/>
		);
	}

						// {item.tags != null ?

						// 		item.tags.length !== 0 ?
						// 			<List style={{marginLeft: "40px", width: "100%"}}

						// 				  size="large"

						// 				  dataSource={item.tags}
						// 				// footer={<div><b>ant design</b> footer part</div>}
						// 				  renderItem={item => (
						// 					  <Tag key={item.id} color={TagSelection.getColorPreset(item.color)}>
						// 						  {item.name} ({item.times_used})
						// 					  </Tag>

						// 				  )}/>
						// 			: <div></div>


						// 	:
						// 	<div></div>
						// }
}

const Companys = (props) => {
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 10,
			}}
			dataSource={props.data}
			// footer={<div><b>ant design</b> footer part</div>}
			renderItem={item => (
				<List.Item
					key={item.title}
					// actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
					extra={<img width={136} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
				>
					<List.Item.Meta
						avatar={<Avatar src={item.avatar} />}
						title={<a href={`/companys/${item.slug}`} >{item.name}</a>} //  <a href={`/companys/${item.slug}`} > </a>
						description={item.info}
					/>
					{item.content}
					{ renderTags(item) }
				</List.Item>
			)}
		/>
	);
};

export default Companys;