import React from 'react'

const SelectStatus = ({searchStatus, page}) => {

    const showOrder = (e) => {
        searchStatus(e.target.value)
        page()
    }

    return (
        <select
            id="status"
            defaultValue={''}
            className="bg-gray-200 rounded-xl select select-sm"
            onChange={(e) => showOrder(e)}>
            <option id="" value="">
                เลือกสถานะ
            </option>
            <option value={0}>รอยืนยัน</option>
            <option value={1}>กำลังซื้อ</option>
            <option value={2}>กำลังส่ง</option>
            <option value={3}>ส่งสำเร็จ</option>
            <option value={4}>ยกเลิก</option>
        </select>
    )
}

export default SelectStatus