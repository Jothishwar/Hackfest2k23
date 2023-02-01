import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './home.css';
import {Link} from 'react-router-dom';

function Homebuttons() {
    const handleClick=()=>{
    }
  return (
    <>
    <div className='home'>
        <div className='hero'>
            <h3>Departments</h3>
            <div className="mb-2">   
                <Link to='/analysis'>
                    <Button variant="primary" className='buttn' onClick={handleClick} >
                    CSE
                    </Button>
                </Link>
                <Link to='/analysis'>
                <Button variant="primary" className='buttn' onClick={handleClick} >
                    CSE IOT
                </Button>
                </Link>
                <Link to='/analysis'>
                <Button variant="primary" className='buttn' onClick={handleClick} >
                    CSE CYBERSECURITY
                </Button>
                </Link>
                <Link to='/analysis'>
                <Button variant="primary" className='buttn' onClick={handleClick} >
                    CSE AI/ML
                </Button>
                </Link>
            </div>
        </div>
        <div className='announcements'>      
            <h3>Announcements</h3>
                {[  
                    'Primary',
                    'Primary',
                    'Primary'
                ].map((variant) => (
                    <>
                    <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '25rem' }}
                    className="mb-2"
                    >
                    <Card.Header>
                        Notification
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        Some example Notification text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                    </Card.Body>
                    </Card>
                    </>
                )
            )}
        </div>
        <div className='dummy'></div>
  </div>
    </>
  );
}

export default Homebuttons;