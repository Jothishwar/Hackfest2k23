import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../home.css';

function Homebuttons() {
  return (
    <>
    <div className='home'>
        <div className='hero'>
            <h3>Departments</h3>
            <div className="mb-2">   
                <Button variant="primary" className='buttn'>
                    CSE
                </Button>
                <Button variant="primary" className='buttn'>
                    CSE IOT
                </Button>
                <Button variant="primary" className='buttn'>
                    CSE CYBERSECURITY
                </Button>
                <Button variant="primary" className='buttn'>
                    CSE AI/ML
                </Button>
            </div>
        </div>
        <div className='announcements'>      
            <h4>Announcements</h4>
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