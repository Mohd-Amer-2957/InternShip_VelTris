import { Select } from 'antd';


const App = () => {

    const fruits = ["Apple", "Mango", "Banana", "Grape", "Dates"];
    return (
        <div>
            <center>
                <h1>hey There</h1>
                <div className='section1'>
                    <h3>What are your favorate Fruits</h3>
                    <Select placeholder="Select the fruit" style={{ width: '20%' }} mode='multiple' >

                        {fruits.map((item) => {
                            return <Select.Option value={item}></Select.Option>
                        })}
                    </Select>


                </div>

            </center>
        </div>
    )
}

export default App