import useStorage from '../hooks/storage';
import {useState, useEffect} from 'react';
function Todo(){
    const [items, putItems] = useStorage();
    const [arr, setArr] = useState([
        {id: 1, text: "Huyen"},
        {id: 2, text: "Hoa"},
        {id: 3, text: "Hung"},
        {id: 4, text: "Long"}
    ]);
    const [text, setText] = useState();
    const [checkID, setCheckID] = useState();
    
    function DisplayItem(){
        setCheckID(NaN);
        items.map(item =>{
            if (item.text === text){
                setCheckID(item.id);
            }
        });
    }
    
    function handleChange(evt){
        setText(evt.target.value);
    }

    useEffect(() => {
        putItems(arr);
      }, []);

    return (
        <div>
            <div class='element-tag'>学生一覧：
                [{items.map(item => item.text).join(", ")}]
            </div>
            <div class='element-tag'>検索名前：
                <input
                    type='text'
                    onChange={handleChange}
                />
            </div>
             <button onClick={DisplayItem}>確定</button>
             <div class='element-tag'>検索名前：{text}</div>
             <div class='element-tag'>位置：{checkID}</div>
        </div>
    );
}
export default Todo; 