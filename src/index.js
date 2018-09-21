import dva from 'dva';
import './index.css';
// 1. Initialize
// const app = dva();
const app = dva({
    initialState: {
        products: {
            num: 0,
            list: [
                {
                    name: '王一扬',
                    content: 'data001',
                    id: 1
                },
                {
                    name: '张三',
                    content: 'data002',
                    id: 2
                },
                {
                    name: '李四',
                    content: 'data003',
                    id: 3
                }
            ]
        }
    }
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
