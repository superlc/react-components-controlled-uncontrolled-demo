import {useState} from 'react'

export default function Input() {
    const [value, setValue] = useState('')
    
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
          名字:
          <input type="text" value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
}