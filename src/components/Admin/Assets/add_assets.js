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
                <div className='container p-3 mb-5 mx-auto mt-5 rounded bg-light shadow' style={{width:400}}>
                        <form>
                                <h3 className='text-center'>Add Assets</h3>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='assetsId' className='form-label'>Assets ID: </label>
                                    <div className="col-sm-10">
                                        <input type='text' className='form-control' id='assetsId' name='assetsId'/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='name' className='form-label'>Assets Name: </label>
                                    <div className="col-sm-10">
                                        <input type='text' className='form-control' id='name' name='name'/>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='status' className='form-label'>Status: </label>
                                    <div className="col-sm-10">
                                        <select className='form-select mt-3'>
                                            <option>Use Assets</option>
                                            <option>Repair Assets</option>
                                            <option>Out of use Assets</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3 mt-3">
                                    <label htmlFor='addDate' className='form-label'>Added Date: </label>
                                    <div className="col-sm-10">
                                        <input type='date' className='form-control' id='addDate' placeholder='Enter Added Date' name='addDate'/>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor='addTime' className='form-label'>Time: </label>
                                    <div className="col-sm-10">
                                        <input type='time' className='form-control' id='addTime' placeholder='Enter time' name='addTime'/>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <div className="mb-3"></div>
                                    <div className="col-sm-10">
                                        <input className="form-check-input" type="checkbox" id="Check"/>
                                        <label className="form-check-label" htmlFor="Check">
                                            All are Correct
                                        </label>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                <button type="clear" className="btn btn-secondary mx-3" >Clear</button>
                         </form>
                    </div>
            </div>
        </div>
    );
}

export default AddAssets;
