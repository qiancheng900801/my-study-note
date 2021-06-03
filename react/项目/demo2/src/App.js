import './App.less';
import { Button } from 'antd';
import 'antd/dist/antd.less'
function App() {
  return (
    <div className="App">
      <Button type="primary">按钮</Button>
      <div className="box1">
        box1
        <div className="box2">
          box2
        </div>
      </div>
    </div>
  );
}

export default App;
