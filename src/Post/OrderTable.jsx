import React from 'react'

const OrderTable = () => {

    const headTable = ['Name', 'Lastname', 'Menu', 'Location', 'status']

    return (
        <table className='border-collapse w-full table-auto'>
            <thead>
                <tr>
                    {(headTable.map((head) => {
                        return(
                            <th className='border-solid border-[1px] border-black'>{head}</th>
                        )
                    }))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Teerawat</td>
                    <td>Chanvipardilok</td>
                    <td>Noodle</td>
                    <td>test</td>
                    <td>wait</td>
                </tr>
            </tbody>
        </table>
    )
}

export default OrderTable