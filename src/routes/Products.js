import React, { Component } from 'react';
import { connect } from 'dva';

import { WhiteSpace, Button, NavBar, Icon, SwipeAction, List } from 'antd-mobile';


class Products extends Component {
    render() {
        const { products, dispatch } = this.props;
        return (
            <div>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    leftContent="返回"
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >导航栏</NavBar>

                <WhiteSpace size='lg' />


                <List>
                    {
                        products.list.map((v, i) => 
                            <SwipeAction
                                key={i}
                                style={{ backgroundColor: 'gray' }}
                                autoClose
                                right={[
                                    {
                                        text: '删除该选项',
                                        onPress: () => (
                                            dispatch({
                                                type: 'products/deleteItem',
                                                payload: v.id
                                            })
                                        ),
                                        style: { backgroundColor: '#F4333C', color: 'white' },
                                    },
                                ]}
                            >
                                <List.Item
                                    arrow="horizontal"
                                    multipleLine
                                    onClick={() => { }}
                                    platform="android"
                                >
                                    {v.name} 
                                    <List.Item.Brief>{v.content}</List.Item.Brief>
                                </List.Item>
                            </SwipeAction>
                        )
                    }
                </List>
                
                <WhiteSpace size='lg' />
                <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
                    <h1>{products.num}</h1>
                    <Button type="primary" inline style={{ marginRight: '4px' }} onClick={() => (
                        dispatch({
                            type: 'products/addNum'
                        })
                    )}>inline primary</Button>
                </div>
            </div>
        )
    }
}

// export default Products;
export default connect(
    ({ products }) => ({ products })
)(Products);