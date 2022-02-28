import {useState} from 'react'

export default function Textarea() {
    const [value, setValue] = useState('我是Select的状态')
    
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
          精彩的文案:
          <textarea value={value} onChange={handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
}