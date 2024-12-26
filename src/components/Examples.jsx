import { useEffect, useState } from "react"

export default function Sample(){
    const [count, setCount] = useState(0)
    useEffect(() => {
        
        return () => {
            setCount(count + 1)
        };
    },1000);

    return <div>The count is {count}</div>
}