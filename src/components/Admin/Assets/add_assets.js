import React from 'react';
import Sidebar from '../Sidebar';
import Topbar from '../../Topbar';

function AddAssets() {
    return (
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div className='flex-grow-1'>
                <Topbar/>
                <div className="p-4">
                <div className="login template d-flex justify-content-center align-items-center vh-100 bg-light">
                    <div className='form_container shadow p-5 mb-5  rounded bg-white'>
                        <form>
                        <h3 className='text-center'>Add Assets</h3>
                        <div class="mb-3 mt-3">
                            <label for='assets id' class='from-lable'>Assets ID: </label>
                            <div class="col-sm-10">
                            <input type='text' class='from-control' id='assets id' name='assets id'/>
                            </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for='name' class='from-lable'>Assets Name: </label>
                            <div class="col-sm-10">
                            <input type='text' class='from-control' id='name' name='name'/>
                            </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for='status' class='from-lable'>Status: </label>
                            <div class="col-sm-10">
                            <select className='from select mt-3'>
                                <option>Use Assets</option>
                                <option>Repair Assets</option>
                                <option>Out of use Assets</option>
                            </select>
                            </div>
                        </div>
                        <div class="mb-3 mt-3">
                            <label for='adddate' class='from-lable'>Added Date: </label>
                            <div class="col-sm-10">
                            <input type='date' class='from-control' id='add' placeholder='Enter Added Date' name='adddate'/>
                            </div>
                        </div>
                        <div>
                        <label for='addtime' class='from-lable'>Time: </label>
                        <div class="col-sm-10">
                        <input type='time' class='from-control' id='add' placeholder='Enter time' name='addtime'/>
                        </div>
                        </div>
                        <div class="mb-3">
                        <div class="mb-3"></div>
                        <div class="col-sm-10">
                        <input class="correct-input" type="checkbox" id="Check"/>
                            <label class="addcorrect" for="Check">
                            All are Correct
                            </label>
                        </div>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default AddAssets;
