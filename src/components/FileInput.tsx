import {useRef} from 'react'

export default function FileInput() {
    const fileInputRef = useRef<HTMLInputElement>(null)
    
    const handleSubmit = (e: any) => {
      e.preventDefault()
      // 消费状态 value
      console.log(fileInputRef.current?.files)
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          请选择文件:
          <input type="file" ref={fileInputRef} />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
}