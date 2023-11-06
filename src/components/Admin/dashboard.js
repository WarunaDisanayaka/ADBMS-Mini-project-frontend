import React, { useState, useEffect } from 'react';
import Topbar from '../Topbar';
import Sidebar from './Sidebar';
import { Card, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function Dashboard() {
  const [open, setOpen] = useState('');
  const [inprogress, setInprogress] = useState('');
  const [repair, setRepair] = useState('');
  const [closed, setClosed] = useState('');

  useEffect(() => {
    axios.post('http://3.229.95.193:8080/complains/openCount')
      .then((response) => {
        setOpen(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.post('http://3.229.95.193:8080/complains/inProgressCount')
      .then((response) => {
        setInprogress(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.post('http://3.229.95.193:8080/complains/repairCount')
      .then((response) => {
        setRepair(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios.post('http://3.229.95.193:8080/complains/closedCount')
      .then((response) => {
        setClosed(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const variant = ['danger', 'info', 'warning', 'success'];
  const titles = ['Total Complains', 'Total Reviewed Cases', 'Total on Repair cases', 'Total Reslove Cases'];
  const numbers = [open, inprogress, repair, closed];
  const iconlist = ['fas fa-exclamation', 'fas fa-user-check', 'fas fa-wrench', 'fas fa-check'];

  return (
    <div className="d-flex">
      <div>
        <Sidebar />
      </div>
      <div className="flex-grow-1">
        <Topbar />
        <div className="p-4 mt-5">
          <Row xs={1} md={4} className="g-4">
            {[0, 1, 2, 3].map((index) => (
              <Col key={index}>
                <Card
                  bg={variant[index]}
                  text={variant[index] === 'light' ? 'dark' : 'white'}
                  style={{ width: '18 rem', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)' }}
                  className="mb-2"
                >
                  <Card.Body>
                    <Card.Title style={{ fontWeight: 'bolder' }}>{titles[index]}</Card.Title>
                    <Card.Text style={{ fontSize: '40px' }}>
                      {numbers[index]} <i className={iconlist[index]} style={{ marginLeft: '140px' }}></i>
                    </Card.Text>
                    for this month ...
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
