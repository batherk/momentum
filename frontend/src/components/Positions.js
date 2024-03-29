import React from 'react';

import { List, Avatar } from 'antd';

import { Link } from 'react-router-dom';

// const IconText = ({ type, text }) => (
// 	<span>
// 		<Icon type={type} style={{ marginRight: 8 }} />
// 		{text}
// 	</span>
// );

const Positions = (props) => {
	return (
		<List
			itemLayout="vertical"
			size="large"
			pagination={{
				onChange: (page) => {
					console.log(page);
				},
				pageSize: 3,
			}}
			dataSource={props.data}
			// footer={<div><b>ant design</b> footer part</div>}
			renderItem={item => (
				<List.Item
					key={item.title}
					// actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
					// extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
				>
					<Link to={`/positions/${item.company.slug}/${item.id}/`}>
						<List.Item.Meta
							avatar={<Avatar src={item.avatar} />}
							title={`${item.company.name}: ${item.name}`}
							// title={<a href={`/positions/${item.id}`}>{`${item.company.name}: ${item.name}`}</a>}
							description={item.description}
						/>
					</Link>
					{/*`${item.company.name}: ${item.content}`*/}
				</List.Item>
			)}
		/>
	);
};

export default Positions;