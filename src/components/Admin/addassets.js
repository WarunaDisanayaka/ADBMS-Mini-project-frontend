import React from 'react'

function addassets() {
  return (
    <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className='form_container shadow p-5 mb-5  rounded bg-white'>
            <form>
            <h3 className='text-center'>Add Assets</h3>
            <div class="mb-3 mt-3">
                <label for='assets id' class='from-lable'>Assets ID: </label>
                <label input type='text' class='from-control' id='assets id' placeholder='Enter assets ID' name='assets id'></label>
            </div>
            <div class="mb-3 mt-3">
                <label for='name' class='from-lable'>Name: </label>
                <label input type='text' class='from-control' id='name' placeholder='Enter Name' name='name'></label>
            </div>
            <div class="mb-3 mt-3">
                <label for='status' class='from-lable'>Status: </label>
                <select className='from select mt-3'>
                    <option>Use Assets</option>
                    <option>Repair Assets</option>
                    <option>Out of use Assets</option>
                </select>
            </div>
            <div class="mb-3 mt-3">
                <label for='adddate' class='from-lable'>Added Date: </label>
                <label input type='date' class='from-control' id='add' placeholder='Enter Added Date' name='adddate'></label>
            </div>
            </form>
        </div>
    </div>
  )
}

export default addassets