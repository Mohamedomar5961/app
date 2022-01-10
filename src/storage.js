function App() {
  const [count, setCount] = useState(0);
  const [info, setInfo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [edit, setEdit] = useState();

  useEffect(async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: {
            _limit: 10,
          },
        }
      );
      setInfo(response.data);

      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const Clicker = () => {
    setCount(count + 2);
  };
  const deleteTodo = async (id) => {
    try {
      let newData = info.filter((item) => {
        return item.id !== id;
      });
      setInfo(newData);
    } catch (err) {
      console.log(err);
    }
  };

  const change = (e) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const addTodo = async (e) => {
    e.preventDefault();
    try {
      let newTodo = {
        id: info.length + 1,
        title: inputValue,
        compeleted: false,
      };

      setInfo([...info, newTodo]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateTodo = async (id) => {
    let updated = info.map((items) => {
      if (items.id === id) {
        items.title = edit;
      }
      return items;
    });

    setInfo(updated);
  };

  return (
    <div className="App">
      <input onChange={change} />
      <button onClick={addTodo}>Add</button>
      {info.map((item) => {
        return (
          <div className="gradiant">
            <div className="todos">
              <div className="items">
                <p>{item.title}</p>
                <button
                  onClick={() => {
                    deleteTodo(item.id);
                  }}
                >
                  {" "}
                  delete{" "}
                </button>
                <input
                  onChange={(e) => {
                    setEdit(e.target.value);
                  }}
                />

                <button
                  onClick={() => {
                    updateTodo(item.id);
                  }}
                >
                  {" "}
                  update{" "}
                </button>
              </div>
            </div>
          </div>
        );
      })}
      //{" "}
      <div className="big">
        //{" "}
        <div className="small">
          //{" "}
          {/* <img src="https://digitalsynopsis.com/wp-content/uploads/2018/02/colorful-fantasy-light-digital-art-gradients-blend-modes-3.png" /> */}
          //{" "}
        </div>
        //{" "}
      </div>
    </div>
  );
}

export default App;
