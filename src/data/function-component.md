```jsx
function UserData() {
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.example.com/user')
      .then(response => {
        setUserData(response.data);
        setIsLoading(false);
      })
      .catch(error => console.error('Fetching data failed', error));

    return () => {
      console.log('Cleaning up...');
    };
  }, []);

  return (
    <div>
      {isLoading ? <p>Loading...</p> : <p>Hello, {userData.name}</p>}
    </div>
  );
}

export default UserData;
```
🙃🙃🙃

함수형 컴포넌트에서는 `useEffect` 훅을 사용하여   
컴포넌트의 마운트와 업데이트 시의 사이드 이펙트를 처리합니다.   
의존성 배열이 빈 배열(`[]`)로 설정되어 있으므로, 
이 `useEffect` 훅은 컴포넌트가 처음 마운트될 때만 실행됩니다.   
이를 통해 API 호출을 수행하고, 결과에 따라 상태를 업데이트하여 UI를 렌더링합니다.    


함수형 컴포넌트와 `useEffect` 훅을 사용함으로써   
라이프사이클 메서드 없이도 마운트 시점에 필요한 사이드 이펙트를 처리할 수 있게 되어   
코드가 더 간결하고 선언적으로 작성됩니다.  

`useEffect`의 반환값은 컴포넌트가 언마운트될 때 실행됩니다.   
이는 주로 리소스를 정리하거나, 메모리 누수를 방지하기 위해 사용됩니다.   
예를 들어, 비동기 작업을 수행하는 동안 컴포넌트가 언마운트되면,   
그 결과를 상태에 설정하려고 할 때 메모리 누수가 발생할 수 있습니다.   
따라서 `useEffect` 내부에서 생성된 리소스나 구독, 비동기 작업 등을 취소하거나 정리하는 작업이 필요할 때   
이 반환 함수를 사용합니다.