import axios from 'axios'

export const getExampleData = async () => {
    const { data } = await axios.get('https://koreanjson.com/posts/1')
    if (data) return data
}
