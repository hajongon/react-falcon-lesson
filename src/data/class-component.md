```jsx
class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
      isLoading: true,
    };
  }

  componentDidMount() {
    axios.get('https://api.example.com/user')
      .then(response => {
        this.setState({ userData: response.data, isLoading: false });
      })
      .catch(error => console.error('Fetching data failed', error));
  }

  componentWillUnmount() {
    console.log('Cleaning up...');
  }

  render() {
    const { userData, isLoading } = this.state;
    return (
      <div>
        {isLoading ? <p>Loading...</p> : <p>Hello, {userData.name}</p>}
      </div>
    );
  }
}

export default UserData;
```
🙃🙃🙃

클래스형 컴포넌트에서는 `componentDidMount` 라이프사이클 메서드를 사용하여   
컴포넌트가 마운트된 직후 API 호출을 수행합니다.   
상태에 따라 로딩 메시지 또는 사용자 데이터를 렌더링합니다.  

`componentWillUnmount`는 컴포넌트가 DOM에서 제거되기 직전에 실행되는 라이프사이클 메서드입니다.   
이는 다른 페이지로의 이동, 조건부 렌더링에 의한 컴포넌트 제거, 부모 컴포넌트에서 자식 컴포넌트를 제거하는 경우 등,     
컴포넌트가 더 이상 필요하지 않을 때 호출됩니다.  