import {useState} from 'react'

interface SelectProps {
    list: { value: string, text: string }[]
}
export default function Select(props: SelectProps) {
    const { list } = props
    // 默认选中第2项
    const [value, setValue] = useState(list[1].value)
    
    const handleChange = (e: any) => {
      setValue(e.target.value)
    }
    const handleSubmit = (e: any) => {
      e.preventDefault()
      // 消费状态 value
      console.log(value)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          请选择颜色:
          <select onChange={handleChange} defaultValue={value}>
              {list.map(item => (<option key={item.value} value={item.value}>{item.text}</option>))}
          </select>
        </label>
        <input type="submit" value="提交" />
      </form>
    );
}