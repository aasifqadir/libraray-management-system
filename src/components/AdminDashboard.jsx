import '../styles/AdminDashboard.css'
import Footer from './Footer';

const AdminDashboard = () => {
    return (
        <div className="dashborad">
            <div className="landing-hero">
                <div className="message-block">
                    <span><h1>NatGeo Photographer</h1></span>
                    <p>On Thursday, April 20 at 7:00 pm, hear from award-winning photographer Pete McBride on the value of protecting our lands and waters.</p>
                </div>
            </div>
            <div className='resume-main'>
                <div className='resume-wrapper'>
                </div>
                <div className='resume-card'>
                    <span><h1>Resume Writing Help</h1></span>
                    <h4>Do you find yourself back on the job market? Get help writing or tidying up your resume from Greenwich Library’s Business Librarian. They’ll help you format and include key points so that you’ll land the interview!</h4>
                </div>
            </div>
            <div className='event-main '>
                <div className='event'>
                    <span><h1>April Events</h1></span>
                    <p>Join us for a full slate of programming and events at the Greenwich Libraries! These printable one-page Library calendars are fridge-ready.</p>
                </div>
            </div>
            <div className="text-main">
                <div className="first-div">
                    <span><h1>Tax Help</h1></span>
                    <p>On Saturday, April 8 from 9:00 am – 2:00 pm, drop in for one of our last sessions of one-on-one tax prep assistance with AARP volunteers.</p>
                </div>
                <div className="first-div">
                    <span><h1>Interviewing</h1></span>
                    <p>On Monday, April 10 at 1:00 pm, give yourself the edge over the other candidates during the interview process with career coach Noelle Gross.</p>
                </div>
                <div className="first-div">
                    <span><h1>Senior Living</h1></span>
                    <p>On Wednesday, April 12 at 6:00 pm, learn about different options, best practices, and resources available for the care of a senior loved one.</p>
                </div>
                <div className="first-div">
                    <span><h1>Grow a Plant from Seed</h1></span>
                    <p>On Thursday, April 13 at 7:00 pm at Byram Shubert Library, learn the steps from seed to garden with Ellen Zampino.</p>
                </div>
            </div>
            <div className='resume-main '>
                <div className='resume-wrapper main-help'>
                </div>
                <div className='resume-card'>
                    <span><h1>Become a Volunteer</h1></span>
                    <h4>Find Your Place! Become a part of the amazing Friends of Greenwich Library team to help bring exceptional programming and resources to your community.</h4>
                </div>
            </div>
            <div className='quote '>
                <p>Michael Embry</p>
                <span>I don’t have to look far to find treasures. I discover them every time I visit a library.</span>
            </div>
            <Footer />
        </div>
    );
}

export default AdminDashboard;