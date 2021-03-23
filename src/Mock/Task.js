const { v4: uuidv4 } = require('uuid');

let items = [
    {
        id: uuidv4(),
        name: 'Đặng Công Tiến',
        level: 1
    },
    {
        id: uuidv4(),
        name: 'Vũ Thị Khánh Chi',
        level: 2
    },
    {
        id: uuidv4(),
        name: '123abc',
        level: 0
    }
]
export default items;