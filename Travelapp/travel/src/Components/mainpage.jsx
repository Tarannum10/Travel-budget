import '../styles/mainpage.css'
import { Plane } from 'lucide-react';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Instagram } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Mainpage = () => {

    const [display, setDisplay] = useState(null)
    const [image,setImage] = useState("https://i.pinimg.com/736x/99/10/29/9910292732b3627ee6e4fbebbfecb900.jpg")

    const toggleSection = (sectionName) => {
        if (display === sectionName) {
            setDisplay(null); 
            setImage("https://i.pinimg.com/736x/99/10/29/9910292732b3627ee6e4fbebbfecb900.jpg")
        } else {
            setDisplay(sectionName);
            setImage(imagemap[sectionName])
        }
    };

    const imagemap={
        tripplanning:"https://c.ndtvimg.com/2025-04/nnl1v3vk_trip_625x300_18_April_25.jpg",
        budgetsetup:"https://images.squarespace-cdn.com/content/v1/59efce03cf81e03545e1f20b/1658494139066-B8W55O7SMB6WBDP0GS32/unsplash-image-hBuwVLcYTnA.jpg?format=2500w",
        expensetracking:"https://miro.medium.com/v2/resize:fit:1400/0*PIHQXmBQZ7lQYHqS",
        progressvisualization:"https://5ly.co/content/images/2022/10/bruno-nascimento-PHIgYUGQPvU-unsplash.jpg",
        splitsharecosts:"https://images.unsplash.com/photo-1579208575657-c595a05383b7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hhcmV8ZW58MHx8MHx8fDA%3D",
        savetraveldocuments:"https://images.unsplash.com/photo-1544396821-4dd40b938ad3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2ZmaWNlJTIwZG9jdW1lbnRzfGVufDB8fDB8fHww",
        itinerarymanagement:"https://images.squarespace-cdn.com/content/v1/64d296c853d1581f7ff733b3/f6df6436-e464-4ab4-947c-4f6b1a99d9b8/gabriel-ramos-JrOvNsQHsec-unsplash.jpg"
    }

    return (
        <>
            <div className="heading">
                <h1><Plane size='33px' /> Plan & Go</h1>
                <button className='login'>Log In</button>
            </div>
            <div className='box1'>
                <div>
                    <h2>"Your trip, your budget <br />— perfectly planned."</h2>
                    <h4><span>Plan & Go</span> helps people Plan smart. Go far. Track your trip expenses with ease and never lose control of your
                        budget.<br />Organize your travel budget, so you can focus on the experience – not the expenses.<br />From flights
                        to food, track every penny and make every journey count.<br />Create your dream trip on a budget – with Plan & Go,
                        travel planning is easier than ever.<br />Your travel buddy for smart budgeting, expense tracking, and effortless
                        planning.<br />Turn your wanderlust into well-planned adventures with just a few taps.</h4>
                    <button>Get Started</button>
                    <button>Contact</button>
                </div>
                <img className='img1' src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img" />
            </div>
            <div className='box2'>
                <div>
                    <img src="https://lh3.googleusercontent.com/1llDgIWakhYobFhZa9KYSQOgtjBLXWFR31MYtYNNspf6hJhM2jDjMi51GyjsiMt67fqpsoWr2QN5a9MklZ8YnxklP0K-JrTsTA07DMHwOVBadrEPrfI=w1920-rw" alt="img" />
                </div>
                <div>
                    <h3>“Travel Smarter, Not Harder.”</h3>
                    <h3>“Plan Every Rupee, Enjoy Every Mile.”</h3>
                    <h3>“Where Budget Meets Wanderlust.”</h3>
                    <h3>“Spend Less. Explore More.”</h3>
                    <h3>“Your Journey. Your Budget. Your Way.”</h3>
                </div>
                <div>
                    <img src="https://lh3.googleusercontent.com/dQkMCf0BW4VTGTPkxkKIdNBeDJuHCQwZKpE4viff79_aGrmWENzYVKnJFLzO1jFuv-AnBztAWEYNy-i1EfDrU6ffDX9mUEFnMN641v7KDx38LajJ3Q=w1920-rw" alt="img" />
                </div>
            </div>
            <h2 className='line1'><MessageCircle color='rgb(140, 211, 228)' size="150px" />Nearly everything that People around the <br />World need is available in <span>Play & Go.</span></h2>
            <div className='box3'>
                <h1>One app. All your travel plans. <br />Always under budget.</h1>
                <h2>Set your budget, track your spend, and make every trip stress-free.</h2>
                <div className='box4'>
                    <div>
                        <h3 onClick={() => toggleSection("tripplanning")}>Trip Planning</h3>
                        {
                            display === "tripplanning" && (
                                <ul className='list'>
                                    <li>Create and name new trips</li>
                                    <li>Set start and end dates</li>
                                    <li>Select destination(s)</li>
                                </ul>
                            )
                        }
                        <div className='line2'></div>

                        <h3 onClick={() => toggleSection("budgetsetup")}>Budget Setup</h3>
                        {
                            display === "budgetsetup" && (
                                <ul className='list'>
                                    <li>Set overall budget for the trip</li>
                                    <li>Allocate funds to categories like:</li>
                                    <ul>
                                        <li>Flights</li>
                                        <li>Accommodation</li>
                                        <li>Food & Drinks</li>
                                        <li>Transport</li>
                                        <li>Activities/Tours</li>
                                        <li>Shopping</li>
                                        <li>Emergency/Buffer</li>
                                    </ul>
                                </ul>
                            )
                        }
                        <div className='line2'></div>

                        <h3 onClick={() => toggleSection("expensetracking")}>Expense Tracking</h3>
                        {
                            display === "expensetracking" && (
                                <ul className='list'>
                                    <li>Add daily expenses manually or via receipts</li>
                                    <li>View category-wise spending</li>
                                    <li>Mark expenses as paid/unpaid</li>
                                    <li>Currency conversion if traveling abroad</li>
                                </ul>
                            )
                        }
                        <div className='line2'></div>

                        <h3 onClick={() => toggleSection("progressvisualization")}>Progress Visualization</h3>
                        {
                            display === "progressvisualization" && (
                                <ul className='list'>
                                    <li>Pie charts or bar graphs showing:</li>
                                    <ul>
                                        <li>Budget vs actual</li>
                                        <li>Category-wise breakdown</li>
                                        <li>Daily spending trends</li>
                                    </ul>
                                </ul>
                            )
                        }
                        <div className='line2'></div>

                        <h3 onClick={() => toggleSection("splitsharecosts")}>Split & Share Costs (Group Travel)</h3>
                        {
                            display === "splitsharecosts" && (
                                <ul className='list'>
                                    <li>Add travel companions</li>
                                    <li>Split costs among group members</li>
                                    <li>Track who paid what and settle up</li>
                                </ul>
                            )
                        }
                        <div className='line2'></div>

                        <h3 onClick={() => toggleSection("savetraveldocuments")}>Save Travel Documents</h3>
                        {
                            display === "savetraveldocuments" && (
                                <ul className='list'>
                                    <li>Upload/store:</li>
                                    <ul>
                                        <li>Tickets</li>
                                        <li>Hotel bookings</li>
                                        <li>Visa documents</li>
                                        <li>IDs</li>
                                    </ul>
                                </ul>
                            )
                        }
                        <div className='line2'></div>

                        <h3 onClick={() => toggleSection("itinerarymanagement")}>Itinerary Management</h3>
                        {
                            display === "itinerarymanagement" && (
                                <ul className='list'>
                                    <li>Add daily plans or activities</li>
                                    <li>Link expenses to specific itinerary items</li>
                                    <li>Set reminders for bookings/timings</li>
                                </ul>
                            )
                        }
                        <div className='line2'></div>
                    </div>
                    <img src={image} alt="img" />
                </div>
            </div>
            <div className='box5'>
                <div>
                    <h1><Plane size='33px' /> Plan & Go</h1>
                </div>
                <div>
                    <h4>Privacy policy</h4>
                    <h4>Terms & conditions</h4>
                    <h4>Imprint</h4>
                </div>
                <div>
                    <h3>Follow Us</h3>
                    <div className='box6'>
                        <div className='logo'><Instagram color='white'/></div>
                        <div className='logo'><Linkedin color='white'/></div>
                        <div className='logo'><Facebook color='white'/></div>
                    </div>
                    
                    <h4>Email: support@planandgo.com</h4>
                </div>
            </div>
        </>
    )

}

export default Mainpage